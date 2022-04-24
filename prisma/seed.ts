import { PrismaClient } from '@prisma/client';
import { dailyPrayers } from '../dailyPrayers';

const prisma = new PrismaClient();

async function main() {
  for (const dailyPrayer of dailyPrayers) {
    await prisma.dailyPrayer.create({
      data: dailyPrayer,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
