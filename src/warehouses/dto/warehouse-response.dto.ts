import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class WarehouseResponseDto {
  @ApiProperty({ description: 'The unique identifier of the warehouse' })
  id: string;

  @ApiProperty({ description: 'The name of the warehouse' })
  name: string;

  @ApiPropertyOptional({ description: 'The description of the warehouse' })
  description?: string;

  @ApiProperty({ description: 'The address of the warehouse' })
  address: string;

  @ApiProperty({ description: 'The creation date' })
  createdAt: Date;

  @ApiProperty({ description: 'The last update date' })
  updatedAt: Date;
}

export class PaginatedWarehouseMetaDto {
  @ApiProperty()
  page: number;
  
  @ApiProperty()
  limit: number;

  @ApiProperty()
  totalItems: number;

  @ApiProperty()
  totalPages: number;
}

export class PaginatedWarehouseResponseDto {
  @ApiProperty({ type: [WarehouseResponseDto] })
  data: WarehouseResponseDto[];

  @ApiProperty({ type: PaginatedWarehouseMetaDto })
  meta: PaginatedWarehouseMetaDto;
}
