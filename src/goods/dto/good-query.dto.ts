import { IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';

export class GoodQueryDto extends PaginationQueryDto {
  @ApiPropertyOptional({ example: 'Mouse', description: 'Search term for goods' })
  @IsOptional()
  @IsString()
  search?: string;
}
