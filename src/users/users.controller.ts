import { Controller, Get, Patch, Body, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import type { Request } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  async getProfile(@Req() req: Request) {
    const user = req.user as { id: string };
    return this.usersService.findById(user.id);
  }

  @Patch('me')
  async updateProfile(@Req() req: Request, @Body() dto: UpdateUserDto) {
    const user = req.user as { id: string };
    return this.usersService.updateProfile(user.id, dto);
  }
}
