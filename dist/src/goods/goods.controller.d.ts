import { GoodsService } from './goods.service';
import { CreateGoodDto } from './dto/create-good.dto';
import { UpdateGoodDto } from './dto/update-good.dto';
import { GoodQueryDto } from './dto/good-query.dto';
export declare class GoodsController {
    private readonly goodsService;
    constructor(goodsService: GoodsService);
    findAll(warehouseId: string, query: GoodQueryDto): Promise<import("../common/interfaces/paginated-result.interface").PaginatedResult<Good>>;
    create(warehouseId: string, dto: CreateGoodDto): Promise<Good>;
    findOne(warehouseId: string, id: string): Promise<Good>;
    update(warehouseId: string, id: string, dto: UpdateGoodDto): Promise<Good>;
    remove(warehouseId: string, id: string): Promise<void>;
}
