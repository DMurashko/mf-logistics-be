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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodsController = void 0;
const common_1 = require("@nestjs/common");
const goods_service_1 = require("./goods.service");
const create_good_dto_1 = require("./dto/create-good.dto");
const update_good_dto_1 = require("./dto/update-good.dto");
const good_query_dto_1 = require("./dto/good-query.dto");
let GoodsController = class GoodsController {
    goodsService;
    constructor(goodsService) {
        this.goodsService = goodsService;
    }
    findAll(warehouseId, query) {
        return this.goodsService.findAll(warehouseId, query);
    }
    create(warehouseId, dto) {
        return this.goodsService.create(warehouseId, dto);
    }
    findOne(warehouseId, id) {
        return this.goodsService.findOne(warehouseId, id);
    }
    update(warehouseId, id, dto) {
        return this.goodsService.update(warehouseId, id, dto);
    }
    remove(warehouseId, id) {
        return this.goodsService.remove(warehouseId, id);
    }
};
exports.GoodsController = GoodsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('warehouseId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, good_query_dto_1.GoodQueryDto]),
    __metadata("design:returntype", void 0)
], GoodsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Param)('warehouseId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_good_dto_1.CreateGoodDto]),
    __metadata("design:returntype", void 0)
], GoodsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('warehouseId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], GoodsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('warehouseId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_good_dto_1.UpdateGoodDto]),
    __metadata("design:returntype", void 0)
], GoodsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('warehouseId', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], GoodsController.prototype, "remove", null);
exports.GoodsController = GoodsController = __decorate([
    (0, common_1.Controller)('warehouses/:warehouseId/goods'),
    __metadata("design:paramtypes", [goods_service_1.GoodsService])
], GoodsController);
//# sourceMappingURL=goods.controller.js.map