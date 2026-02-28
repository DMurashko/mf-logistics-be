import { PrismaService } from '../prisma/prisma.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { WarehouseQueryDto } from './dto/warehouse-query.dto';
import { PaginatedResult } from '../common/interfaces/paginated-result.interface';
import type { Warehouse } from '@prisma/client';
export declare class WarehousesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(query: WarehouseQueryDto): Promise<PaginatedResult<Warehouse>>;
    findOne(id: string): Promise<Warehouse>;
    create(dto: CreateWarehouseDto): Promise<Warehouse>;
    update(id: string, dto: UpdateWarehouseDto): Promise<Warehouse>;
    remove(id: string): Promise<void>;
}
