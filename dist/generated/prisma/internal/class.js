"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaClientClass = getPrismaClientClass;
const runtime = __importStar(require("@prisma/client/runtime/client"));
const config = {
    "previewFeatures": [],
    "clientVersion": "7.4.2",
    "engineVersion": "94a226be1cf2967af2541cca5529f0f7ba866919",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel User {\n  id               String   @id @default(uuid())\n  email            String   @unique\n  password         String\n  firstName        String   @map(\"first_name\")\n  lastName         String   @map(\"last_name\")\n  refreshTokenHash String?  @map(\"refresh_token_hash\")\n  createdAt        DateTime @default(now()) @map(\"created_at\")\n  updatedAt        DateTime @updatedAt @map(\"updated_at\")\n\n  @@map(\"users\")\n}\n\nmodel Warehouse {\n  id          String   @id @default(uuid())\n  name        String\n  description String?\n  address     String\n  createdAt   DateTime @default(now()) @map(\"created_at\")\n  updatedAt   DateTime @updatedAt @map(\"updated_at\")\n\n  goods Good[]\n\n  @@map(\"warehouses\")\n}\n\nmodel Good {\n  id          String   @id @default(uuid())\n  name        String\n  description String?\n  quantity    Int      @default(0)\n  price       Decimal  @default(0) @db.Decimal(10, 2)\n  warehouseId String   @map(\"warehouse_id\")\n  createdAt   DateTime @default(now()) @map(\"created_at\")\n  updatedAt   DateTime @updatedAt @map(\"updated_at\")\n\n  warehouse Warehouse @relation(fields: [warehouseId], references: [id], onDelete: Cascade)\n\n  @@index([warehouseId])\n  @@map(\"goods\")\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"firstName\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"first_name\"},{\"name\":\"lastName\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"last_name\"},{\"name\":\"refreshTokenHash\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"refresh_token_hash\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"users\"},\"Warehouse\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"address\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"goods\",\"kind\":\"object\",\"type\":\"Good\",\"relationName\":\"GoodToWarehouse\"}],\"dbName\":\"warehouses\"},\"Good\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"quantity\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"warehouseId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"warehouse_id\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"warehouse\",\"kind\":\"object\",\"type\":\"Warehouse\",\"relationName\":\"GoodToWarehouse\"}],\"dbName\":\"goods\"}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"User.findUnique\",\"User.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"User.findFirst\",\"User.findFirstOrThrow\",\"User.findMany\",\"data\",\"User.createOne\",\"User.createMany\",\"User.createManyAndReturn\",\"User.updateOne\",\"User.updateMany\",\"User.updateManyAndReturn\",\"create\",\"update\",\"User.upsertOne\",\"User.deleteOne\",\"User.deleteMany\",\"having\",\"_count\",\"_min\",\"_max\",\"User.groupBy\",\"User.aggregate\",\"warehouse\",\"goods\",\"Warehouse.findUnique\",\"Warehouse.findUniqueOrThrow\",\"Warehouse.findFirst\",\"Warehouse.findFirstOrThrow\",\"Warehouse.findMany\",\"Warehouse.createOne\",\"Warehouse.createMany\",\"Warehouse.createManyAndReturn\",\"Warehouse.updateOne\",\"Warehouse.updateMany\",\"Warehouse.updateManyAndReturn\",\"Warehouse.upsertOne\",\"Warehouse.deleteOne\",\"Warehouse.deleteMany\",\"Warehouse.groupBy\",\"Warehouse.aggregate\",\"Good.findUnique\",\"Good.findUniqueOrThrow\",\"Good.findFirst\",\"Good.findFirstOrThrow\",\"Good.findMany\",\"Good.createOne\",\"Good.createMany\",\"Good.createManyAndReturn\",\"Good.updateOne\",\"Good.updateMany\",\"Good.updateManyAndReturn\",\"Good.upsertOne\",\"Good.deleteOne\",\"Good.deleteMany\",\"_avg\",\"_sum\",\"Good.groupBy\",\"Good.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"name\",\"description\",\"quantity\",\"price\",\"warehouseId\",\"createdAt\",\"updatedAt\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"address\",\"every\",\"some\",\"none\",\"email\",\"password\",\"firstName\",\"lastName\",\"refreshTokenHash\",\"is\",\"isNot\",\"connectOrCreate\",\"upsert\",\"createMany\",\"set\",\"disconnect\",\"delete\",\"connect\",\"updateMany\",\"deleteMany\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "lAEcMAs-AABrADA_AAAEABBAAABrADBBAQAAAAFHQABkACFIQABkACFYAQAAAAFZAQBiACFaAQBiACFbAQBiACFcAQBjACEBAAAAAQAgAQAAAAEAIAs-AABrADA_AAAEABBAAABrADBBAQBiACFHQABkACFIQABkACFYAQBiACFZAQBiACFaAQBiACFbAQBiACFcAQBjACEBXAAAbAAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACADAAAABAAgAwAABQAwBAAAAQAgCEEBAAAAAUdAAAAAAUhAAAAAAVgBAAAAAVkBAAAAAVoBAAAAAVsBAAAAAVwBAAAAAQEIAAAJACAIQQEAAAABR0AAAAABSEAAAAABWAEAAAABWQEAAAABWgEAAAABWwEAAAABXAEAAAABAQgAAAsAMAEIAAALADAIQQEAcgAhR0AAdgAhSEAAdgAhWAEAcgAhWQEAcgAhWgEAcgAhWwEAcgAhXAEAcwAhAgAAAAEAIAgAAA4AIAhBAQByACFHQAB2ACFIQAB2ACFYAQByACFZAQByACFaAQByACFbAQByACFcAQBzACECAAAABAAgCAAAEAAgAgAAAAQAIAgAABAAIAMAAAABACAPAAAJACAQAAAOACABAAAAAQAgAQAAAAQAIAQVAACMAQAgFgAAjgEAIBcAAI0BACBcAABsACALPgAAagAwPwAAFwAQQAAAagAwQQEATwAhR0AAUwAhSEAAUwAhWAEATwAhWQEATwAhWgEATwAhWwEATwAhXAEAUAAhAwAAAAQAIAMAABYAMBQAABcAIAMAAAAEACADAAAFADAEAAABACAKGwAAZQAgPgAAYQAwPwAAIgAQQAAAYQAwQQEAAAABQgEAYgAhQwEAYwAhR0AAZAAhSEAAZAAhVAEAYgAhAQAAABoAIAwaAABpACA-AABmADA_AAAcABBAAABmADBBAQBiACFCAQBiACFDAQBjACFEAgBnACFFEABoACFGAQBiACFHQABkACFIQABkACECGgAAiwEAIEMAAGwAIAwaAABpACA-AABmADA_AAAcABBAAABmADBBAQAAAAFCAQBiACFDAQBjACFEAgBnACFFEABoACFGAQBiACFHQABkACFIQABkACEDAAAAHAAgAwAAHQAwBAAAHgAgAQAAABwAIAEAAAAaACAKGwAAZQAgPgAAYQAwPwAAIgAQQAAAYQAwQQEAYgAhQgEAYgAhQwEAYwAhR0AAZAAhSEAAZAAhVAEAYgAhAhsAAIoBACBDAABsACADAAAAIgAgAwAAIwAwBAAAGgAgAwAAACIAIAMAACMAMAQAABoAIAMAAAAiACADAAAjADAEAAAaACAHGwAAiQEAIEEBAAAAAUIBAAAAAUMBAAAAAUdAAAAAAUhAAAAAAVQBAAAAAQEIAAAnACAGQQEAAAABQgEAAAABQwEAAAABR0AAAAABSEAAAAABVAEAAAABAQgAACkAMAEIAAApADAHGwAAfAAgQQEAcgAhQgEAcgAhQwEAcwAhR0AAdgAhSEAAdgAhVAEAcgAhAgAAABoAIAgAACwAIAZBAQByACFCAQByACFDAQBzACFHQAB2ACFIQAB2ACFUAQByACECAAAAIgAgCAAALgAgAgAAACIAIAgAAC4AIAMAAAAaACAPAAAnACAQAAAsACABAAAAGgAgAQAAACIAIAQVAAB5ACAWAAB7ACAXAAB6ACBDAABsACAJPgAAYAAwPwAANQAQQAAAYAAwQQEATwAhQgEATwAhQwEAUAAhR0AAUwAhSEAAUwAhVAEATwAhAwAAACIAIAMAADQAMBQAADUAIAMAAAAiACADAAAjADAEAAAaACABAAAAHgAgAQAAAB4AIAMAAAAcACADAAAdADAEAAAeACADAAAAHAAgAwAAHQAwBAAAHgAgAwAAABwAIAMAAB0AMAQAAB4AIAkaAAB4ACBBAQAAAAFCAQAAAAFDAQAAAAFEAgAAAAFFEAAAAAFGAQAAAAFHQAAAAAFIQAAAAAEBCAAAPQAgCEEBAAAAAUIBAAAAAUMBAAAAAUQCAAAAAUUQAAAAAUYBAAAAAUdAAAAAAUhAAAAAAQEIAAA_ADABCAAAPwAwCRoAAHcAIEEBAHIAIUIBAHIAIUMBAHMAIUQCAHQAIUUQAHUAIUYBAHIAIUdAAHYAIUhAAHYAIQIAAAAeACAIAABCACAIQQEAcgAhQgEAcgAhQwEAcwAhRAIAdAAhRRAAdQAhRgEAcgAhR0AAdgAhSEAAdgAhAgAAABwAIAgAAEQAIAIAAAAcACAIAABEACADAAAAHgAgDwAAPQAgEAAAQgAgAQAAAB4AIAEAAAAcACAGFQAAbQAgFgAAcAAgFwAAbwAgOgAAbgAgOwAAcQAgQwAAbAAgCz4AAE4AMD8AAEsAEEAAAE4AMEEBAE8AIUIBAE8AIUMBAFAAIUQCAFEAIUUQAFIAIUYBAE8AIUdAAFMAIUhAAFMAIQMAAAAcACADAABKADAUAABLACADAAAAHAAgAwAAHQAwBAAAHgAgCz4AAE4AMD8AAEsAEEAAAE4AMEEBAE8AIUIBAE8AIUMBAFAAIUQCAFEAIUUQAFIAIUYBAE8AIUdAAFMAIUhAAFMAIQ4VAABVACAWAABfACAXAABfACBJAQAAAAFKAQAAAARLAQAAAARMAQAAAAFNAQAAAAFOAQAAAAFPAQAAAAFQAQBeACFRAQAAAAFSAQAAAAFTAQAAAAEOFQAAXAAgFgAAXQAgFwAAXQAgSQEAAAABSgEAAAAFSwEAAAAFTAEAAAABTQEAAAABTgEAAAABTwEAAAABUAEAWwAhUQEAAAABUgEAAAABUwEAAAABDRUAAFUAIBYAAFUAIBcAAFUAIDoAAFoAIDsAAFUAIEkCAAAAAUoCAAAABEsCAAAABEwCAAAAAU0CAAAAAU4CAAAAAU8CAAAAAVACAFkAIQ0VAABVACAWAABYACAXAABYACA6AABYACA7AABYACBJEAAAAAFKEAAAAARLEAAAAARMEAAAAAFNEAAAAAFOEAAAAAFPEAAAAAFQEABXACELFQAAVQAgFgAAVgAgFwAAVgAgSUAAAAABSkAAAAAES0AAAAAETEAAAAABTUAAAAABTkAAAAABT0AAAAABUEAAVAAhCxUAAFUAIBYAAFYAIBcAAFYAIElAAAAAAUpAAAAABEtAAAAABExAAAAAAU1AAAAAAU5AAAAAAU9AAAAAAVBAAFQAIQhJAgAAAAFKAgAAAARLAgAAAARMAgAAAAFNAgAAAAFOAgAAAAFPAgAAAAFQAgBVACEISUAAAAABSkAAAAAES0AAAAAETEAAAAABTUAAAAABTkAAAAABT0AAAAABUEAAVgAhDRUAAFUAIBYAAFgAIBcAAFgAIDoAAFgAIDsAAFgAIEkQAAAAAUoQAAAABEsQAAAABEwQAAAAAU0QAAAAAU4QAAAAAU8QAAAAAVAQAFcAIQhJEAAAAAFKEAAAAARLEAAAAARMEAAAAAFNEAAAAAFOEAAAAAFPEAAAAAFQEABYACENFQAAVQAgFgAAVQAgFwAAVQAgOgAAWgAgOwAAVQAgSQIAAAABSgIAAAAESwIAAAAETAIAAAABTQIAAAABTgIAAAABTwIAAAABUAIAWQAhCEkIAAAAAUoIAAAABEsIAAAABEwIAAAAAU0IAAAAAU4IAAAAAU8IAAAAAVAIAFoAIQ4VAABcACAWAABdACAXAABdACBJAQAAAAFKAQAAAAVLAQAAAAVMAQAAAAFNAQAAAAFOAQAAAAFPAQAAAAFQAQBbACFRAQAAAAFSAQAAAAFTAQAAAAEISQIAAAABSgIAAAAFSwIAAAAFTAIAAAABTQIAAAABTgIAAAABTwIAAAABUAIAXAAhC0kBAAAAAUoBAAAABUsBAAAABUwBAAAAAU0BAAAAAU4BAAAAAU8BAAAAAVABAF0AIVEBAAAAAVIBAAAAAVMBAAAAAQ4VAABVACAWAABfACAXAABfACBJAQAAAAFKAQAAAARLAQAAAARMAQAAAAFNAQAAAAFOAQAAAAFPAQAAAAFQAQBeACFRAQAAAAFSAQAAAAFTAQAAAAELSQEAAAABSgEAAAAESwEAAAAETAEAAAABTQEAAAABTgEAAAABTwEAAAABUAEAXwAhUQEAAAABUgEAAAABUwEAAAABCT4AAGAAMD8AADUAEEAAAGAAMEEBAE8AIUIBAE8AIUMBAFAAIUdAAFMAIUhAAFMAIVQBAE8AIQobAABlACA-AABhADA_AAAiABBAAABhADBBAQBiACFCAQBiACFDAQBjACFHQABkACFIQABkACFUAQBiACELSQEAAAABSgEAAAAESwEAAAAETAEAAAABTQEAAAABTgEAAAABTwEAAAABUAEAXwAhUQEAAAABUgEAAAABUwEAAAABC0kBAAAAAUoBAAAABUsBAAAABUwBAAAAAU0BAAAAAU4BAAAAAU8BAAAAAVABAF0AIVEBAAAAAVIBAAAAAVMBAAAAAQhJQAAAAAFKQAAAAARLQAAAAARMQAAAAAFNQAAAAAFOQAAAAAFPQAAAAAFQQABWACEDVQAAHAAgVgAAHAAgVwAAHAAgDBoAAGkAID4AAGYAMD8AABwAEEAAAGYAMEEBAGIAIUIBAGIAIUMBAGMAIUQCAGcAIUUQAGgAIUYBAGIAIUdAAGQAIUhAAGQAIQhJAgAAAAFKAgAAAARLAgAAAARMAgAAAAFNAgAAAAFOAgAAAAFPAgAAAAFQAgBVACEISRAAAAABShAAAAAESxAAAAAETBAAAAABTRAAAAABThAAAAABTxAAAAABUBAAWAAhDBsAAGUAID4AAGEAMD8AACIAEEAAAGEAMEEBAGIAIUIBAGIAIUMBAGMAIUdAAGQAIUhAAGQAIVQBAGIAIV0AACIAIF4AACIAIAs-AABqADA_AAAXABBAAABqADBBAQBPACFHQABTACFIQABTACFYAQBPACFZAQBPACFaAQBPACFbAQBPACFcAQBQACELPgAAawAwPwAABAAQQAAAawAwQQEAYgAhR0AAZAAhSEAAZAAhWAEAYgAhWQEAYgAhWgEAYgAhWwEAYgAhXAEAYwAhAAAAAAAAAWIBAAAAAQFiAQAAAAEFYgIAAAABaAIAAAABaQIAAAABagIAAAABawIAAAABBWIQAAAAAWgQAAAAAWkQAAAAAWoQAAAAAWsQAAAAAQFiQAAAAAEFDwAAkAEAIBAAAJMBACBfAACRAQAgYAAAkgEAIGUAABoAIAMPAACQAQAgXwAAkQEAIGUAABoAIAAAAAsPAAB9ADAQAACCAQAwXwAAfgAwYAAAfwAwYQAAgAEAIGIAAIEBADBjAACBAQAwZAAAgQEAMGUAAIEBADBmAACDAQAwZwAAhAEAMAdBAQAAAAFCAQAAAAFDAQAAAAFEAgAAAAFFEAAAAAFHQAAAAAFIQAAAAAECAAAAHgAgDwAAiAEAIAMAAAAeACAPAACIAQAgEAAAhwEAIAEIAACPAQAwDBoAAGkAID4AAGYAMD8AABwAEEAAAGYAMEEBAAAAAUIBAGIAIUMBAGMAIUQCAGcAIUUQAGgAIUYBAGIAIUdAAGQAIUhAAGQAIQIAAAAeACAIAACHAQAgAgAAAIUBACAIAACGAQAgCz4AAIQBADA_AACFAQAQQAAAhAEAMEEBAGIAIUIBAGIAIUMBAGMAIUQCAGcAIUUQAGgAIUYBAGIAIUdAAGQAIUhAAGQAIQs-AACEAQAwPwAAhQEAEEAAAIQBADBBAQBiACFCAQBiACFDAQBjACFEAgBnACFFEABoACFGAQBiACFHQABkACFIQABkACEHQQEAcgAhQgEAcgAhQwEAcwAhRAIAdAAhRRAAdQAhR0AAdgAhSEAAdgAhB0EBAHIAIUIBAHIAIUMBAHMAIUQCAHQAIUUQAHUAIUdAAHYAIUhAAHYAIQdBAQAAAAFCAQAAAAFDAQAAAAFEAgAAAAFFEAAAAAFHQAAAAAFIQAAAAAEEDwAAfQAwXwAAfgAwYQAAgAEAIGUAAIEBADAAAhsAAIoBACBDAABsACAAAAAHQQEAAAABQgEAAAABQwEAAAABRAIAAAABRRAAAAABR0AAAAABSEAAAAABBkEBAAAAAUIBAAAAAUMBAAAAAUdAAAAAAUhAAAAAAVQBAAAAAQIAAAAaACAPAACQAQAgAwAAACIAIA8AAJABACAQAACUAQAgCAAAACIAIAgAAJQBACBBAQByACFCAQByACFDAQBzACFHQAB2ACFIQAB2ACFUAQByACEGQQEAcgAhQgEAcgAhQwEAcwAhR0AAdgAhSEAAdgAhVAEAcgAhAAAAAAMVAAYWAAcXAAgAAAADFQAGFgAHFwAIAhUADBsfCwEaAAoBGyAAAAADFQAQFgARFwASAAAAAxUAEBYAERcAEgEaAAoBGgAKBRUAFxYAGhcAGzoAGDsAGQAAAAAABRUAFxYAGhcAGzoAGDsAGQECAQIDAQUGAQYHAQcIAQkKAQoMAgsNAwwPAQ0RAg4SBBETARIUARMVAhgYBRkZCRwbCh0hCh4kCh8lCiAmCiEoCiIqAiMrDSQtCiUvAiYwDicxCigyCikzAio2Dys3Eyw4Cy05Cy46Cy87CzA8CzE-CzJAAjNBFDRDCzVFAjZGFTdHCzhICzlJAjxMFj1NHA"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map