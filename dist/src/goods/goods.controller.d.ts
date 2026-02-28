import { GoodsService } from './goods.service';
import { CreateGoodDto } from './dto/create-good.dto';
import { UpdateGoodDto } from './dto/update-good.dto';
import { GoodQueryDto } from './dto/good-query.dto';
export declare class GoodsController {
    private readonly goodsService;
    constructor(goodsService: GoodsService);
    findAll(warehouseId: string, query: GoodQueryDto): Promise<import("../common/interfaces/paginated-result.interface").PaginatedResult<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        quantity: number;
        price: import("@prisma/client/runtime/library").Decimal;
        warehouseId: string;
    }>>;
    create(warehouseId: string, dto: CreateGoodDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        quantity: number;
        price: import("@prisma/client/runtime/library").Decimal;
        warehouseId: string;
    }>;
    findOne(warehouseId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        quantity: number;
        price: import("@prisma/client/runtime/library").Decimal;
        warehouseId: string;
    }>;
    update(warehouseId: string, id: string, dto: UpdateGoodDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        description: string | null;
        quantity: number;
        price: import("@prisma/client/runtime/library").Decimal;
        warehouseId: string;
    }>;
    remove(warehouseId: string, id: string): Promise<void>;
}
