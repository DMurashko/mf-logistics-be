import {
  Controller,
  Post,
  Body,
  UseGuards,
  HttpCode,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
import { Public } from './decorators/public.decorator';
import { JwtRefreshGuard } from './guards/jwt-refresh.guard';
import type { Request } from 'express';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({ status: 201, description: 'User successfully registered.', type: AuthResponseDto })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @Public()
  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @ApiOperation({ summary: 'Login user' })
  @ApiResponse({ status: 200, description: 'User successfully logged in.', type: AuthResponseDto })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Refresh JWT token' })
  @ApiResponse({ status: 200, description: 'Token successfully refreshed.', type: AuthResponseDto })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @Public()
  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(@Req() req: Request, @Body() _dto: RefreshTokenDto) {
    const user = req.user as { sub: string; refreshToken: string };
    return this.authService.refresh(user.sub, user.refreshToken);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Logout user' })
  @ApiResponse({ status: 200, description: 'User successfully logged out.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Req() req: Request) {
    const user = req.user as { id: string };
    await this.authService.logout(user.id);
    return { message: 'Logged out successfully' };
  }
}
