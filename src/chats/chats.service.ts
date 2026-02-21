import { prisma } from '../lib/prisma';

export async function findChats() {
  return prisma.chat.findMany({
    include: {
      members: {
        include: {
          member: {
            select: {
              id: true,
              name: true,
              image: true,
            },
          },
        },
      },
    },
  });
}
