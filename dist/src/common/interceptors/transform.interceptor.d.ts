import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export interface WrappedResponse<T> {
    data: T;
    statusCode: number;
}
export declare class TransformInterceptor<T> implements NestInterceptor<T, WrappedResponse<T> | Record<string, unknown>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<WrappedResponse<T> | Record<string, unknown>>;
}
