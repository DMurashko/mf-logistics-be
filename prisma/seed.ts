import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

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
