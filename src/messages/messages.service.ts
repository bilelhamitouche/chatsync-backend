import { prisma } from '../lib/prisma';

export async function findMessages() {
  return prisma.message.findMany();
}
