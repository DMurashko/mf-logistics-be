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
const prisma_1 = require("../generated/prisma");
const bcrypt = __importStar(require("bcrypt"));
const prisma = new prisma_1.PrismaClient();
async function main() {
    const existing = await prisma.user.findUnique({
        where: { email: 'demo@warehouse.app' },
    });
    if (existing) {
        console.log('Seed data already exists, skipping');
        return;
    }
    console.log('Seeding database...');
    const hashedPassword = await bcrypt.hash('Demo1234!', 12);
    await prisma.user.create({
        data: {
            email: 'demo@warehouse.app',
            password: hashedPassword,
            firstName: 'Demo',
            lastName: 'User',
        },
    });
    const warehouse1 = await prisma.warehouse.create({
        data: {
            name: 'Main Distribution Center',
            description: 'Primary warehouse for electronics and appliances',
            address: '123 Logistics Ave, Chicago, IL 60601',
        },
    });
    const warehouse2 = await prisma.warehouse.create({
        data: {
            name: 'West Coast Hub',
            description: 'Secondary warehouse for west coast fulfillment',
            address: '456 Harbor Blvd, Los Angeles, CA 90001',
        },
    });
    await prisma.good.createMany({
        data: [
            {
                name: 'Laptop - Model X',
                description: '15-inch business laptop',
                quantity: 150,
                price: 999.99,
                warehouseId: warehouse1.id,
            },
            {
                name: 'Wireless Mouse',
                description: 'Ergonomic wireless mouse',
                quantity: 500,
                price: 29.99,
                warehouseId: warehouse1.id,
            },
            {
                name: 'USB-C Hub',
                description: '7-in-1 USB-C docking station',
                quantity: 200,
                price: 49.99,
                warehouseId: warehouse2.id,
            },
        ],
    });
    console.log('Database seeded successfully');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => prisma.$disconnect());
//# sourceMappingURL=seed.js.map