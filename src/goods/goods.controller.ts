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
import { GoodsService } from './goods.service';
import { CreateGoodDto } from './dto/create-good.dto';
import { UpdateGoodDto } from './dto/update-good.dto';
import { GoodQueryDto } from './dto/good-query.dto';

@Controller('warehouses/:warehouseId/goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}

  @Get()
  findAll(
    @Param('warehouseId', ParseUUIDPipe) warehouseId: string,
    @Query() query: GoodQueryDto,
  ) {
    return this.goodsService.findAll(warehouseId, query);
  }

  @Post()
  create(
    @Param('warehouseId', ParseUUIDPipe) warehouseId: string,
    @Body() dto: CreateGoodDto,
  ) {
    return this.goodsService.create(warehouseId, dto);
  }

  @Get(':id')
  findOne(
    @Param('warehouseId', ParseUUIDPipe) warehouseId: string,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.goodsService.findOne(warehouseId, id);
  }

  @Patch(':id')
  update(
    @Param('warehouseId', ParseUUIDPipe) warehouseId: string,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateGoodDto,
  ) {
    return this.goodsService.update(warehouseId, id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(
    @Param('warehouseId', ParseUUIDPipe) warehouseId: string,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.goodsService.remove(warehouseId, id);
  }
}
