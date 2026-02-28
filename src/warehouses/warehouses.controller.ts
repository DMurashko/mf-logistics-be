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
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { WarehousesService } from './warehouses.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { WarehouseQueryDto } from './dto/warehouse-query.dto';
import { WarehouseResponseDto, PaginatedWarehouseResponseDto } from './dto/warehouse-response.dto';

@ApiTags('Warehouses')
@ApiBearerAuth()
@Controller('warehouses')
export class WarehousesController {
  constructor(private readonly warehousesService: WarehousesService) {}

  @ApiOperation({ summary: 'List all warehouses', operationId: 'findAllWarehouses' })
  @ApiResponse({
    status: 200,
    description: 'Warehouses retrieved successfully.',
    type: PaginatedWarehouseResponseDto,
  })
  @Get()
  findAll(@Query() query: WarehouseQueryDto) {
    return this.warehousesService.findAll(query);
  }

  @ApiOperation({ summary: 'Create a new warehouse', operationId: 'createWarehouse' })
  @ApiResponse({ status: 201, description: 'Warehouse created successfully.', type: WarehouseResponseDto })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @Post()
  create(@Body() dto: CreateWarehouseDto) {
    return this.warehousesService.create(dto);
  }

  @ApiOperation({ summary: 'Get a specific warehouse by id', operationId: 'findOneWarehouse' })
  @ApiResponse({ status: 200, description: 'Warehouse retrieved successfully.', type: WarehouseResponseDto })
  @ApiResponse({ status: 404, description: 'Warehouse not found.' })
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.warehousesService.findOne(id);
  }

  @ApiOperation({ summary: 'Update a specific warehouse by id', operationId: 'updateWarehouse' })
  @ApiResponse({ status: 200, description: 'Warehouse updated successfully.', type: WarehouseResponseDto })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiResponse({ status: 404, description: 'Warehouse not found.' })
  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateWarehouseDto,
  ) {
    return this.warehousesService.update(id, dto);
  }

  @ApiOperation({ summary: 'Delete a specific warehouse by id', operationId: 'removeWarehouse' })
  @ApiResponse({ status: 204, description: 'Warehouse deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Warehouse not found.' })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.warehousesService.remove(id);
  }
}
