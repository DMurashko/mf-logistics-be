import { WarehousesService } from './warehouses.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { WarehouseQueryDto } from './dto/warehouse-query.dto';
export declare class WarehousesController {
    private readonly warehousesService;
    constructor(warehousesService: WarehousesService);
    findAll(query: WarehouseQueryDto): Promise<import("../common/interfaces/paginated-result.interface").PaginatedResult<Warehouse>>;
    create(dto: CreateWarehouseDto): Promise<Warehouse>;
    findOne(id: string): Promise<Warehouse>;
    update(id: string, dto: UpdateWarehouseDto): Promise<Warehouse>;
    remove(id: string): Promise<void>;
}
