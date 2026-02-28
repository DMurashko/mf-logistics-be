import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Public } from '../auth/decorators/public.decorator';
import { HealthResponseDto } from './dto/health-response.dto';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  @ApiOperation({ summary: 'Health check endpoint' })
  @ApiResponse({ status: 200, description: 'Service is healthy.', type: HealthResponseDto })
  @Public()
  @Get()
  check() {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }
}
