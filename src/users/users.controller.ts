import { Controller, Get, Patch, Body, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import type { Request } from 'express';

@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Get current user profile' })
  @ApiResponse({ status: 200, description: 'Profile retrieved successfully.', type: UserResponseDto })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @Get('me')
  async getProfile(@Req() req: Request) {
    const user = req.user as { id: string };
    return this.usersService.findById(user.id);
  }

  @ApiOperation({ summary: 'Update current user profile' })
  @ApiResponse({ status: 200, description: 'Profile updated successfully.', type: UserResponseDto })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @Patch('me')
  async updateProfile(@Req() req: Request, @Body() dto: UpdateUserDto) {
    const user = req.user as { id: string };
    return this.usersService.updateProfile(user.id, dto);
  }
}
