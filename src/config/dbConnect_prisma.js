import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function connectMongoDB() {
  try {
    // Test the connection
    await prisma.$connect();
    console.log('Prisma connected to MongoDB');
    return prisma;
  } catch (error) {
    console.log('Prisma connection failed:', error);
  }
}

export default connectMongoDB;


