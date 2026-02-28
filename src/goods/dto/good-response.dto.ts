import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

export class GoodResponseDto {
  @ApiProperty({ description: 'The unique identifier of the good' })
  id: string;

  @ApiProperty({ description: 'The name of the good' })
  name: string;

  @ApiPropertyOptional({ description: 'The description of the good', nullable: true })
  description?: string | null;

  @ApiProperty({ description: 'The quantity of the good' })
  quantity: number;

  @ApiProperty({ description: 'The price of the good', type: 'number' })
  price: Prisma.Decimal;

  @ApiProperty({ description: 'The warehouse ID' })
  warehouseId: string;

  @ApiProperty({ description: 'The creation date' })
  createdAt: Date;

  @ApiProperty({ description: 'The last update date' })
  updatedAt: Date;
}

export class PaginatedGoodMetaDto {
  @ApiProperty()
  page: number;
  
  @ApiProperty()
  limit: number;

  @ApiProperty()
  totalItems: number;

  @ApiProperty()
  totalPages: number;
}

export class PaginatedGoodResponseDto {
  @ApiProperty({ type: [GoodResponseDto] })
  data: GoodResponseDto[];

  @ApiProperty({ type: PaginatedGoodMetaDto })
  meta: PaginatedGoodMetaDto;
}
