import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status: number;
    let message: string | string[];

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();
      message =
        typeof exceptionResponse === 'string'
          ? exceptionResponse
          : ((exceptionResponse as Record<string, unknown>).message as
              | string
              | string[]);
      this.logger.warn(
        `${request.method} ${request.url} → ${status}: ${Array.isArray(message) ? message.join(', ') : message}`,
      );
    } else if (this.isPrismaError(exception)) {
      const mapped = this.mapPrismaError(exception);
      status = mapped.status;
      message = mapped.message;
      const prismaException = exception as {
        code: string;
        meta?: Record<string, unknown>;
        message?: string;
      };
      this.logger.error(
        `${request.method} ${request.url} → Prisma error ${prismaException.code}: ${message}` +
          (prismaException.meta
            ? ` | meta: ${JSON.stringify(prismaException.meta)}`
            : '') +
          (prismaException.message
            ? ` | detail: ${prismaException.message}`
            : ''),
      );
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = 'Internal server error';
      this.logger.error(
        `${request.method} ${request.url} → Unhandled exception: ${exception}`,
        exception instanceof Error ? exception.stack : undefined,
      );
    }

    response.status(status).json({
      statusCode: status,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }

  private isPrismaError(
    exception: unknown,
  ): exception is { code: string; meta?: Record<string, unknown> } {
    return (
      typeof exception === 'object' &&
      exception !== null &&
      'code' in exception &&
      typeof (exception as Record<string, unknown>).code === 'string'
    );
  }

  private mapPrismaError(error: {
    code: string;
    meta?: Record<string, unknown>;
  }): {
    status: number;
    message: string;
  } {
    switch (error.code) {
      case 'P2002':
        return {
          status: HttpStatus.CONFLICT,
          message: `Unique constraint violation on: ${(error.meta?.target as string[])?.join(', ') ?? 'unknown field'}`,
        };
      case 'P2025':
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'Record not found',
        };
      default:
        return {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: 'Internal server error',
        };
    }
  }
}
