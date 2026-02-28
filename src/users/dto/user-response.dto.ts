import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({ description: 'The unique identifier of the user' })
  id: string;

  @ApiProperty({ description: 'The email of the user' })
  email: string;

  @ApiProperty({ description: 'The first name of the user' })
  firstName: string;

  @ApiProperty({ description: 'The last name of the user' })
  lastName: string;

  @ApiProperty({ description: 'The creation date of the user record' })
  createdAt: Date;

  @ApiProperty({ description: 'The last update date of the user record' })
  updatedAt: Date;
}
