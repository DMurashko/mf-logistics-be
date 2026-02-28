"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const warehouses_service_1 = require("../warehouses/warehouses.service");
let GoodsService = class GoodsService {
    prisma;
    warehousesService;
    constructor(prisma, warehousesService) {
        this.prisma = prisma;
        this.warehousesService = warehousesService;
    }
    async findAll(warehouseId, query) {
        await this.warehousesService.findOne(warehouseId);
        const { page, limit, search } = query;
        const skip = (page - 1) * limit;
        const where = {
            warehouseId,
            ...(search
                ? { name: { contains: search, mode: 'insensitive' } }
                : {}),
        };
        const [data, totalItems] = await Promise.all([
            this.prisma.good.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.good.count({ where }),
        ]);
        return {
            data,
            meta: {
                page,
                limit,
                totalItems,
                totalPages: Math.ceil(totalItems / limit),
            },
        };
    }
    async findOne(warehouseId, id) {
        const good = await this.prisma.good.findFirst({
            where: { id, warehouseId },
        });
        if (!good) {
            throw new common_1.NotFoundException(`Good with ID "${id}" not found in warehouse "${warehouseId}"`);
        }
        return good;
    }
    async create(warehouseId, dto) {
        await this.warehousesService.findOne(warehouseId);
        return this.prisma.good.create({
            data: { ...dto, warehouseId },
        });
    }
    async update(warehouseId, id, dto) {
        await this.findOne(warehouseId, id);
        return this.prisma.good.update({
            where: { id },
            data: dto,
        });
    }
    async remove(warehouseId, id) {
        await this.findOne(warehouseId, id);
        await this.prisma.good.delete({ where: { id } });
    }
};
exports.GoodsService = GoodsService;
exports.GoodsService = GoodsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        warehouses_service_1.WarehousesService])
], GoodsService);
//# sourceMappingURL=goods.service.js.map