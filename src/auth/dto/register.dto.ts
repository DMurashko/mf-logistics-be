import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'user@example.com', description: 'The email of the user' })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: 'StrongP@ss1!', description: 'The password of the user' })
  @IsString()
  @MinLength(8)
  @MaxLength(64)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/, {
    message:
      'Password must contain at least one uppercase, one lowercase, one number, and one special character',
  })
  password!: string;

  @ApiProperty({ example: 'John', description: 'The first name of the user' })
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  firstName!: string;

  @ApiProperty({ example: 'Doe', description: 'The last name of the user' })
  @IsString()
  @MinLength(1)
  @MaxLength(100)
  lastName!: string;
}
