import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateGoodDto } from './dto/create-good.dto';
import { UpdateGoodDto } from './dto/update-good.dto';
import { GoodQueryDto } from './dto/good-query.dto';
import { WarehousesService } from '../warehouses/warehouses.service';
import { PaginatedResult } from '../common/interfaces/paginated-result.interface';
import type { Good } from '@prisma/client';

@Injectable()
export class GoodsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly warehousesService: WarehousesService,
  ) {}

  async findAll(
    warehouseId: string,
    query: GoodQueryDto,
  ): Promise<PaginatedResult<Good>> {
    await this.warehousesService.findOne(warehouseId);

    const { page, limit, search } = query;
    const skip = (page - 1) * limit;

    const where = {
      warehouseId,
      ...(search
        ? { name: { contains: search, mode: 'insensitive' as const } }
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

  async findOne(warehouseId: string, id: string): Promise<Good> {
    const good = await this.prisma.good.findFirst({
      where: { id, warehouseId },
    });
    if (!good) {
      throw new NotFoundException(
        `Good with ID "${id}" not found in warehouse "${warehouseId}"`,
      );
    }
    return good;
  }

  async create(warehouseId: string, dto: CreateGoodDto): Promise<Good> {
    await this.warehousesService.findOne(warehouseId);
    return this.prisma.good.create({
      data: { ...dto, warehouseId },
    });
  }

  async update(
    warehouseId: string,
    id: string,
    dto: UpdateGoodDto,
  ): Promise<Good> {
    await this.findOne(warehouseId, id);
    return this.prisma.good.update({
      where: { id },
      data: dto,
    });
  }

  async remove(warehouseId: string, id: string): Promise<void> {
    await this.findOne(warehouseId, id);
    await this.prisma.good.delete({ where: { id } });
  }
}
