import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';

export class WarehouseQueryDto extends PaginationQueryDto {
  @ApiPropertyOptional({ example: 'Main', description: 'Search term for warehouses' })
  @IsOptional()
  @IsString()
  search?: string;
}
