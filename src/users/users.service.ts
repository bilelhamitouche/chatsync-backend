import { prisma } from '../lib/prisma';

export async function findUsers() {
  const users = await prisma.user.findMany();
  return users;
}
