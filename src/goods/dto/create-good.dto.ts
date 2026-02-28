import {
  IsString,
  IsOptional,
  IsNumber,
  Min,
  IsInt,
  MinLength,
  MaxLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateGoodDto {
  @ApiProperty({ example: 'Wireless Mouse', description: 'The name of the good' })
  @IsString()
  @MinLength(1)
  @MaxLength(200)
  name!: string;

  @ApiPropertyOptional({ example: 'A highly responsive wireless mouse.', description: 'The description of the good' })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  description?: string;

  @ApiProperty({ example: 100, description: 'The quantity of the good available' })
  @IsInt()
  @Min(0)
  quantity!: number;

  @ApiProperty({ example: 25.99, description: 'The price of the good' })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  price!: number;
}
