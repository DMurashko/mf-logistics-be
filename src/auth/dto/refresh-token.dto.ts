import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RefreshTokenDto {
  @ApiProperty({ example: 'abcde12345...', description: 'The refresh token' })
  @IsString()
  refreshToken!: string;
}
