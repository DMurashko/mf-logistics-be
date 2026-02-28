import { PrismaService } from '../prisma/prisma.service';
import { CreateGoodDto } from './dto/create-good.dto';
import { UpdateGoodDto } from './dto/update-good.dto';
import { GoodQueryDto } from './dto/good-query.dto';
import { WarehousesService } from '../warehouses/warehouses.service';
import { PaginatedResult } from '../common/interfaces/paginated-result.interface';
import type { Good } from '@prisma/client';
export declare class GoodsService {
    private readonly prisma;
    private readonly warehousesService;
    constructor(prisma: PrismaService, warehousesService: WarehousesService);
    findAll(warehouseId: string, query: GoodQueryDto): Promise<PaginatedResult<Good>>;
    findOne(warehouseId: string, id: string): Promise<Good>;
    create(warehouseId: string, dto: CreateGoodDto): Promise<Good>;
    update(warehouseId: string, id: string, dto: UpdateGoodDto): Promise<Good>;
    remove(warehouseId: string, id: string): Promise<void>;
}
