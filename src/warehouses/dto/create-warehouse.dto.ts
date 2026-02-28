import { IsString, IsOptional, MinLength, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateWarehouseDto {
  @ApiProperty({ example: 'Main Logistics Center', description: 'The name of the warehouse' })
  @IsString()
  @MinLength(1)
  @MaxLength(200)
  name!: string;

  @ApiPropertyOptional({ example: 'Located in downtown area.', description: 'The description of the warehouse' })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  description?: string;

  @ApiProperty({ example: '123 Warehouse St, City', description: 'The address of the warehouse' })
  @IsString()
  @MinLength(1)
  @MaxLength(500)
  address!: string;
}
