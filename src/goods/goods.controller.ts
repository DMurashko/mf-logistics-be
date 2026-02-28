import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
  HttpStatus,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { GoodsService } from './goods.service';
import { CreateGoodDto } from './dto/create-good.dto';
import { UpdateGoodDto } from './dto/update-good.dto';
import { GoodQueryDto } from './dto/good-query.dto';
import { GoodResponseDto, PaginatedGoodResponseDto } from './dto/good-response.dto';

@ApiTags('Goods')
@ApiBearerAuth()
@Controller('warehouses/:warehouseId/goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}

  @ApiOperation({ summary: 'List goods for a warehouse', operationId: 'findAllGoods' })
  @ApiParam({ name: 'warehouseId', type: 'string', format: 'uuid' })
  @ApiResponse({ status: 200, description: 'Goods retrieved successfully.', type: PaginatedGoodResponseDto })
  @Get()
  findAll(
    @Param('warehouseId', ParseUUIDPipe) warehouseId: string,
    @Query() query: GoodQueryDto,
  ) {
    return this.goodsService.findAll(warehouseId, query);
  }

  @ApiOperation({ summary: 'Create a new good in a warehouse', operationId: 'createGood' })
  @ApiParam({ name: 'warehouseId', type: 'string', format: 'uuid' })
  @ApiResponse({ status: 201, description: 'Good created successfully.', type: GoodResponseDto })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @Post()
  create(
    @Param('warehouseId', ParseUUIDPipe) warehouseId: string,
    @Body() dto: CreateGoodDto,
  ) {
    return this.goodsService.create(warehouseId, dto);
  }

  @ApiOperation({ summary: 'Get a specific good by id', operationId: 'findOneGood' })
  @ApiParam({ name: 'warehouseId', type: 'string', format: 'uuid' })
  @ApiParam({ name: 'id', type: 'string', format: 'uuid' })
  @ApiResponse({ status: 200, description: 'Good retrieved successfully.', type: GoodResponseDto })
  @ApiResponse({ status: 404, description: 'Good not found.' })
  @Get(':id')
  findOne(
    @Param('warehouseId', ParseUUIDPipe) warehouseId: string,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.goodsService.findOne(warehouseId, id);
  }

  @ApiOperation({ summary: 'Update a specific good by id', operationId: 'updateGood' })
  @ApiParam({ name: 'warehouseId', type: 'string', format: 'uuid' })
  @ApiParam({ name: 'id', type: 'string', format: 'uuid' })
  @ApiResponse({ status: 200, description: 'Good updated successfully.', type: GoodResponseDto })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 404, description: 'Good not found.' })
  @Patch(':id')
  update(
    @Param('warehouseId', ParseUUIDPipe) warehouseId: string,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateGoodDto,
  ) {
    return this.goodsService.update(warehouseId, id, dto);
  }

  @ApiOperation({ summary: 'Delete a specific good by id', operationId: 'removeGood' })
  @ApiParam({ name: 'warehouseId', type: 'string', format: 'uuid' })
  @ApiParam({ name: 'id', type: 'string', format: 'uuid' })
  @ApiResponse({ status: 204, description: 'Good deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Good not found.' })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(
    @Param('warehouseId', ParseUUIDPipe) warehouseId: string,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.goodsService.remove(warehouseId, id);
  }
}
