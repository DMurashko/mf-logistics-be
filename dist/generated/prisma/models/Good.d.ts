import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type GoodModel = runtime.Types.Result.DefaultSelection<Prisma.$GoodPayload>;
export type AggregateGood = {
    _count: GoodCountAggregateOutputType | null;
    _avg: GoodAvgAggregateOutputType | null;
    _sum: GoodSumAggregateOutputType | null;
    _min: GoodMinAggregateOutputType | null;
    _max: GoodMaxAggregateOutputType | null;
};
export type GoodAvgAggregateOutputType = {
    quantity: number | null;
    price: runtime.Decimal | null;
};
export type GoodSumAggregateOutputType = {
    quantity: number | null;
    price: runtime.Decimal | null;
};
export type GoodMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    quantity: number | null;
    price: runtime.Decimal | null;
    warehouseId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GoodMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    quantity: number | null;
    price: runtime.Decimal | null;
    warehouseId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GoodCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    quantity: number;
    price: number;
    warehouseId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type GoodAvgAggregateInputType = {
    quantity?: true;
    price?: true;
};
export type GoodSumAggregateInputType = {
    quantity?: true;
    price?: true;
};
export type GoodMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    quantity?: true;
    price?: true;
    warehouseId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GoodMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    quantity?: true;
    price?: true;
    warehouseId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GoodCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    quantity?: true;
    price?: true;
    warehouseId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type GoodAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GoodWhereInput;
    orderBy?: Prisma.GoodOrderByWithRelationInput | Prisma.GoodOrderByWithRelationInput[];
    cursor?: Prisma.GoodWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GoodCountAggregateInputType;
    _avg?: GoodAvgAggregateInputType;
    _sum?: GoodSumAggregateInputType;
    _min?: GoodMinAggregateInputType;
    _max?: GoodMaxAggregateInputType;
};
export type GetGoodAggregateType<T extends GoodAggregateArgs> = {
    [P in keyof T & keyof AggregateGood]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGood[P]> : Prisma.GetScalarType<T[P], AggregateGood[P]>;
};
export type GoodGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GoodWhereInput;
    orderBy?: Prisma.GoodOrderByWithAggregationInput | Prisma.GoodOrderByWithAggregationInput[];
    by: Prisma.GoodScalarFieldEnum[] | Prisma.GoodScalarFieldEnum;
    having?: Prisma.GoodScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GoodCountAggregateInputType | true;
    _avg?: GoodAvgAggregateInputType;
    _sum?: GoodSumAggregateInputType;
    _min?: GoodMinAggregateInputType;
    _max?: GoodMaxAggregateInputType;
};
export type GoodGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    quantity: number;
    price: runtime.Decimal;
    warehouseId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: GoodCountAggregateOutputType | null;
    _avg: GoodAvgAggregateOutputType | null;
    _sum: GoodSumAggregateOutputType | null;
    _min: GoodMinAggregateOutputType | null;
    _max: GoodMaxAggregateOutputType | null;
};
type GetGoodGroupByPayload<T extends GoodGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GoodGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GoodGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GoodGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GoodGroupByOutputType[P]>;
}>>;
export type GoodWhereInput = {
    AND?: Prisma.GoodWhereInput | Prisma.GoodWhereInput[];
    OR?: Prisma.GoodWhereInput[];
    NOT?: Prisma.GoodWhereInput | Prisma.GoodWhereInput[];
    id?: Prisma.StringFilter<"Good"> | string;
    name?: Prisma.StringFilter<"Good"> | string;
    description?: Prisma.StringNullableFilter<"Good"> | string | null;
    quantity?: Prisma.IntFilter<"Good"> | number;
    price?: Prisma.DecimalFilter<"Good"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    warehouseId?: Prisma.StringFilter<"Good"> | string;
    createdAt?: Prisma.DateTimeFilter<"Good"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Good"> | Date | string;
    warehouse?: Prisma.XOR<Prisma.WarehouseScalarRelationFilter, Prisma.WarehouseWhereInput>;
};
export type GoodOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    warehouse?: Prisma.WarehouseOrderByWithRelationInput;
};
export type GoodWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.GoodWhereInput | Prisma.GoodWhereInput[];
    OR?: Prisma.GoodWhereInput[];
    NOT?: Prisma.GoodWhereInput | Prisma.GoodWhereInput[];
    name?: Prisma.StringFilter<"Good"> | string;
    description?: Prisma.StringNullableFilter<"Good"> | string | null;
    quantity?: Prisma.IntFilter<"Good"> | number;
    price?: Prisma.DecimalFilter<"Good"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    warehouseId?: Prisma.StringFilter<"Good"> | string;
    createdAt?: Prisma.DateTimeFilter<"Good"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Good"> | Date | string;
    warehouse?: Prisma.XOR<Prisma.WarehouseScalarRelationFilter, Prisma.WarehouseWhereInput>;
}, "id">;
export type GoodOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.GoodCountOrderByAggregateInput;
    _avg?: Prisma.GoodAvgOrderByAggregateInput;
    _max?: Prisma.GoodMaxOrderByAggregateInput;
    _min?: Prisma.GoodMinOrderByAggregateInput;
    _sum?: Prisma.GoodSumOrderByAggregateInput;
};
export type GoodScalarWhereWithAggregatesInput = {
    AND?: Prisma.GoodScalarWhereWithAggregatesInput | Prisma.GoodScalarWhereWithAggregatesInput[];
    OR?: Prisma.GoodScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GoodScalarWhereWithAggregatesInput | Prisma.GoodScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Good"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Good"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Good"> | string | null;
    quantity?: Prisma.IntWithAggregatesFilter<"Good"> | number;
    price?: Prisma.DecimalWithAggregatesFilter<"Good"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    warehouseId?: Prisma.StringWithAggregatesFilter<"Good"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Good"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Good"> | Date | string;
};
export type GoodCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    quantity?: number;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    warehouse: Prisma.WarehouseCreateNestedOneWithoutGoodsInput;
};
export type GoodUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    quantity?: number;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    warehouseId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GoodUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    warehouse?: Prisma.WarehouseUpdateOneRequiredWithoutGoodsNestedInput;
};
export type GoodUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoodCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    quantity?: number;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    warehouseId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GoodUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoodUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    warehouseId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoodListRelationFilter = {
    every?: Prisma.GoodWhereInput;
    some?: Prisma.GoodWhereInput;
    none?: Prisma.GoodWhereInput;
};
export type GoodOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type GoodCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GoodAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type GoodMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GoodMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    warehouseId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GoodSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
};
export type GoodCreateNestedManyWithoutWarehouseInput = {
    create?: Prisma.XOR<Prisma.GoodCreateWithoutWarehouseInput, Prisma.GoodUncheckedCreateWithoutWarehouseInput> | Prisma.GoodCreateWithoutWarehouseInput[] | Prisma.GoodUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.GoodCreateOrConnectWithoutWarehouseInput | Prisma.GoodCreateOrConnectWithoutWarehouseInput[];
    createMany?: Prisma.GoodCreateManyWarehouseInputEnvelope;
    connect?: Prisma.GoodWhereUniqueInput | Prisma.GoodWhereUniqueInput[];
};
export type GoodUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: Prisma.XOR<Prisma.GoodCreateWithoutWarehouseInput, Prisma.GoodUncheckedCreateWithoutWarehouseInput> | Prisma.GoodCreateWithoutWarehouseInput[] | Prisma.GoodUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.GoodCreateOrConnectWithoutWarehouseInput | Prisma.GoodCreateOrConnectWithoutWarehouseInput[];
    createMany?: Prisma.GoodCreateManyWarehouseInputEnvelope;
    connect?: Prisma.GoodWhereUniqueInput | Prisma.GoodWhereUniqueInput[];
};
export type GoodUpdateManyWithoutWarehouseNestedInput = {
    create?: Prisma.XOR<Prisma.GoodCreateWithoutWarehouseInput, Prisma.GoodUncheckedCreateWithoutWarehouseInput> | Prisma.GoodCreateWithoutWarehouseInput[] | Prisma.GoodUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.GoodCreateOrConnectWithoutWarehouseInput | Prisma.GoodCreateOrConnectWithoutWarehouseInput[];
    upsert?: Prisma.GoodUpsertWithWhereUniqueWithoutWarehouseInput | Prisma.GoodUpsertWithWhereUniqueWithoutWarehouseInput[];
    createMany?: Prisma.GoodCreateManyWarehouseInputEnvelope;
    set?: Prisma.GoodWhereUniqueInput | Prisma.GoodWhereUniqueInput[];
    disconnect?: Prisma.GoodWhereUniqueInput | Prisma.GoodWhereUniqueInput[];
    delete?: Prisma.GoodWhereUniqueInput | Prisma.GoodWhereUniqueInput[];
    connect?: Prisma.GoodWhereUniqueInput | Prisma.GoodWhereUniqueInput[];
    update?: Prisma.GoodUpdateWithWhereUniqueWithoutWarehouseInput | Prisma.GoodUpdateWithWhereUniqueWithoutWarehouseInput[];
    updateMany?: Prisma.GoodUpdateManyWithWhereWithoutWarehouseInput | Prisma.GoodUpdateManyWithWhereWithoutWarehouseInput[];
    deleteMany?: Prisma.GoodScalarWhereInput | Prisma.GoodScalarWhereInput[];
};
export type GoodUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: Prisma.XOR<Prisma.GoodCreateWithoutWarehouseInput, Prisma.GoodUncheckedCreateWithoutWarehouseInput> | Prisma.GoodCreateWithoutWarehouseInput[] | Prisma.GoodUncheckedCreateWithoutWarehouseInput[];
    connectOrCreate?: Prisma.GoodCreateOrConnectWithoutWarehouseInput | Prisma.GoodCreateOrConnectWithoutWarehouseInput[];
    upsert?: Prisma.GoodUpsertWithWhereUniqueWithoutWarehouseInput | Prisma.GoodUpsertWithWhereUniqueWithoutWarehouseInput[];
    createMany?: Prisma.GoodCreateManyWarehouseInputEnvelope;
    set?: Prisma.GoodWhereUniqueInput | Prisma.GoodWhereUniqueInput[];
    disconnect?: Prisma.GoodWhereUniqueInput | Prisma.GoodWhereUniqueInput[];
    delete?: Prisma.GoodWhereUniqueInput | Prisma.GoodWhereUniqueInput[];
    connect?: Prisma.GoodWhereUniqueInput | Prisma.GoodWhereUniqueInput[];
    update?: Prisma.GoodUpdateWithWhereUniqueWithoutWarehouseInput | Prisma.GoodUpdateWithWhereUniqueWithoutWarehouseInput[];
    updateMany?: Prisma.GoodUpdateManyWithWhereWithoutWarehouseInput | Prisma.GoodUpdateManyWithWhereWithoutWarehouseInput[];
    deleteMany?: Prisma.GoodScalarWhereInput | Prisma.GoodScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type GoodCreateWithoutWarehouseInput = {
    id?: string;
    name: string;
    description?: string | null;
    quantity?: number;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GoodUncheckedCreateWithoutWarehouseInput = {
    id?: string;
    name: string;
    description?: string | null;
    quantity?: number;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GoodCreateOrConnectWithoutWarehouseInput = {
    where: Prisma.GoodWhereUniqueInput;
    create: Prisma.XOR<Prisma.GoodCreateWithoutWarehouseInput, Prisma.GoodUncheckedCreateWithoutWarehouseInput>;
};
export type GoodCreateManyWarehouseInputEnvelope = {
    data: Prisma.GoodCreateManyWarehouseInput | Prisma.GoodCreateManyWarehouseInput[];
    skipDuplicates?: boolean;
};
export type GoodUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: Prisma.GoodWhereUniqueInput;
    update: Prisma.XOR<Prisma.GoodUpdateWithoutWarehouseInput, Prisma.GoodUncheckedUpdateWithoutWarehouseInput>;
    create: Prisma.XOR<Prisma.GoodCreateWithoutWarehouseInput, Prisma.GoodUncheckedCreateWithoutWarehouseInput>;
};
export type GoodUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: Prisma.GoodWhereUniqueInput;
    data: Prisma.XOR<Prisma.GoodUpdateWithoutWarehouseInput, Prisma.GoodUncheckedUpdateWithoutWarehouseInput>;
};
export type GoodUpdateManyWithWhereWithoutWarehouseInput = {
    where: Prisma.GoodScalarWhereInput;
    data: Prisma.XOR<Prisma.GoodUpdateManyMutationInput, Prisma.GoodUncheckedUpdateManyWithoutWarehouseInput>;
};
export type GoodScalarWhereInput = {
    AND?: Prisma.GoodScalarWhereInput | Prisma.GoodScalarWhereInput[];
    OR?: Prisma.GoodScalarWhereInput[];
    NOT?: Prisma.GoodScalarWhereInput | Prisma.GoodScalarWhereInput[];
    id?: Prisma.StringFilter<"Good"> | string;
    name?: Prisma.StringFilter<"Good"> | string;
    description?: Prisma.StringNullableFilter<"Good"> | string | null;
    quantity?: Prisma.IntFilter<"Good"> | number;
    price?: Prisma.DecimalFilter<"Good"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    warehouseId?: Prisma.StringFilter<"Good"> | string;
    createdAt?: Prisma.DateTimeFilter<"Good"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Good"> | Date | string;
};
export type GoodCreateManyWarehouseInput = {
    id?: string;
    name: string;
    description?: string | null;
    quantity?: number;
    price?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GoodUpdateWithoutWarehouseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoodUncheckedUpdateWithoutWarehouseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoodUncheckedUpdateManyWithoutWarehouseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GoodSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    quantity?: boolean;
    price?: boolean;
    warehouseId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["good"]>;
export type GoodSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    quantity?: boolean;
    price?: boolean;
    warehouseId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["good"]>;
export type GoodSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    quantity?: boolean;
    price?: boolean;
    warehouseId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["good"]>;
export type GoodSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    quantity?: boolean;
    price?: boolean;
    warehouseId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type GoodOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "quantity" | "price" | "warehouseId" | "createdAt" | "updatedAt", ExtArgs["result"]["good"]>;
export type GoodInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
};
export type GoodIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
};
export type GoodIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    warehouse?: boolean | Prisma.WarehouseDefaultArgs<ExtArgs>;
};
export type $GoodPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Good";
    objects: {
        warehouse: Prisma.$WarehousePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        description: string | null;
        quantity: number;
        price: runtime.Decimal;
        warehouseId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["good"]>;
    composites: {};
};
export type GoodGetPayload<S extends boolean | null | undefined | GoodDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GoodPayload, S>;
export type GoodCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GoodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GoodCountAggregateInputType | true;
};
export interface GoodDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Good'];
        meta: {
            name: 'Good';
        };
    };
    findUnique<T extends GoodFindUniqueArgs>(args: Prisma.SelectSubset<T, GoodFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GoodClient<runtime.Types.Result.GetResult<Prisma.$GoodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GoodFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GoodClient<runtime.Types.Result.GetResult<Prisma.$GoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GoodFindFirstArgs>(args?: Prisma.SelectSubset<T, GoodFindFirstArgs<ExtArgs>>): Prisma.Prisma__GoodClient<runtime.Types.Result.GetResult<Prisma.$GoodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GoodFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GoodFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GoodClient<runtime.Types.Result.GetResult<Prisma.$GoodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GoodFindManyArgs>(args?: Prisma.SelectSubset<T, GoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GoodCreateArgs>(args: Prisma.SelectSubset<T, GoodCreateArgs<ExtArgs>>): Prisma.Prisma__GoodClient<runtime.Types.Result.GetResult<Prisma.$GoodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GoodCreateManyArgs>(args?: Prisma.SelectSubset<T, GoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GoodCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GoodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GoodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GoodDeleteArgs>(args: Prisma.SelectSubset<T, GoodDeleteArgs<ExtArgs>>): Prisma.Prisma__GoodClient<runtime.Types.Result.GetResult<Prisma.$GoodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GoodUpdateArgs>(args: Prisma.SelectSubset<T, GoodUpdateArgs<ExtArgs>>): Prisma.Prisma__GoodClient<runtime.Types.Result.GetResult<Prisma.$GoodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GoodDeleteManyArgs>(args?: Prisma.SelectSubset<T, GoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GoodUpdateManyArgs>(args: Prisma.SelectSubset<T, GoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GoodUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GoodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GoodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GoodUpsertArgs>(args: Prisma.SelectSubset<T, GoodUpsertArgs<ExtArgs>>): Prisma.Prisma__GoodClient<runtime.Types.Result.GetResult<Prisma.$GoodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GoodCountArgs>(args?: Prisma.Subset<T, GoodCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GoodCountAggregateOutputType> : number>;
    aggregate<T extends GoodAggregateArgs>(args: Prisma.Subset<T, GoodAggregateArgs>): Prisma.PrismaPromise<GetGoodAggregateType<T>>;
    groupBy<T extends GoodGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GoodGroupByArgs['orderBy'];
    } : {
        orderBy?: GoodGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GoodFieldRefs;
}
export interface Prisma__GoodClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    warehouse<T extends Prisma.WarehouseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WarehouseDefaultArgs<ExtArgs>>): Prisma.Prisma__WarehouseClient<runtime.Types.Result.GetResult<Prisma.$WarehousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GoodFieldRefs {
    readonly id: Prisma.FieldRef<"Good", 'String'>;
    readonly name: Prisma.FieldRef<"Good", 'String'>;
    readonly description: Prisma.FieldRef<"Good", 'String'>;
    readonly quantity: Prisma.FieldRef<"Good", 'Int'>;
    readonly price: Prisma.FieldRef<"Good", 'Decimal'>;
    readonly warehouseId: Prisma.FieldRef<"Good", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Good", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Good", 'DateTime'>;
}
export type GoodFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoodSelect<ExtArgs> | null;
    omit?: Prisma.GoodOmit<ExtArgs> | null;
    include?: Prisma.GoodInclude<ExtArgs> | null;
    where: Prisma.GoodWhereUniqueInput;
};
export type GoodFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoodSelect<ExtArgs> | null;
    omit?: Prisma.GoodOmit<ExtArgs> | null;
    include?: Prisma.GoodInclude<ExtArgs> | null;
    where: Prisma.GoodWhereUniqueInput;
};
export type GoodFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoodSelect<ExtArgs> | null;
    omit?: Prisma.GoodOmit<ExtArgs> | null;
    include?: Prisma.GoodInclude<ExtArgs> | null;
    where?: Prisma.GoodWhereInput;
    orderBy?: Prisma.GoodOrderByWithRelationInput | Prisma.GoodOrderByWithRelationInput[];
    cursor?: Prisma.GoodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GoodScalarFieldEnum | Prisma.GoodScalarFieldEnum[];
};
export type GoodFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoodSelect<ExtArgs> | null;
    omit?: Prisma.GoodOmit<ExtArgs> | null;
    include?: Prisma.GoodInclude<ExtArgs> | null;
    where?: Prisma.GoodWhereInput;
    orderBy?: Prisma.GoodOrderByWithRelationInput | Prisma.GoodOrderByWithRelationInput[];
    cursor?: Prisma.GoodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GoodScalarFieldEnum | Prisma.GoodScalarFieldEnum[];
};
export type GoodFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoodSelect<ExtArgs> | null;
    omit?: Prisma.GoodOmit<ExtArgs> | null;
    include?: Prisma.GoodInclude<ExtArgs> | null;
    where?: Prisma.GoodWhereInput;
    orderBy?: Prisma.GoodOrderByWithRelationInput | Prisma.GoodOrderByWithRelationInput[];
    cursor?: Prisma.GoodWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GoodScalarFieldEnum | Prisma.GoodScalarFieldEnum[];
};
export type GoodCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoodSelect<ExtArgs> | null;
    omit?: Prisma.GoodOmit<ExtArgs> | null;
    include?: Prisma.GoodInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GoodCreateInput, Prisma.GoodUncheckedCreateInput>;
};
export type GoodCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GoodCreateManyInput | Prisma.GoodCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GoodCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoodSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GoodOmit<ExtArgs> | null;
    data: Prisma.GoodCreateManyInput | Prisma.GoodCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.GoodIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GoodUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoodSelect<ExtArgs> | null;
    omit?: Prisma.GoodOmit<ExtArgs> | null;
    include?: Prisma.GoodInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GoodUpdateInput, Prisma.GoodUncheckedUpdateInput>;
    where: Prisma.GoodWhereUniqueInput;
};
export type GoodUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GoodUpdateManyMutationInput, Prisma.GoodUncheckedUpdateManyInput>;
    where?: Prisma.GoodWhereInput;
    limit?: number;
};
export type GoodUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoodSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GoodOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GoodUpdateManyMutationInput, Prisma.GoodUncheckedUpdateManyInput>;
    where?: Prisma.GoodWhereInput;
    limit?: number;
    include?: Prisma.GoodIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GoodUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoodSelect<ExtArgs> | null;
    omit?: Prisma.GoodOmit<ExtArgs> | null;
    include?: Prisma.GoodInclude<ExtArgs> | null;
    where: Prisma.GoodWhereUniqueInput;
    create: Prisma.XOR<Prisma.GoodCreateInput, Prisma.GoodUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GoodUpdateInput, Prisma.GoodUncheckedUpdateInput>;
};
export type GoodDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoodSelect<ExtArgs> | null;
    omit?: Prisma.GoodOmit<ExtArgs> | null;
    include?: Prisma.GoodInclude<ExtArgs> | null;
    where: Prisma.GoodWhereUniqueInput;
};
export type GoodDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GoodWhereInput;
    limit?: number;
};
export type GoodDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GoodSelect<ExtArgs> | null;
    omit?: Prisma.GoodOmit<ExtArgs> | null;
    include?: Prisma.GoodInclude<ExtArgs> | null;
};
export {};
