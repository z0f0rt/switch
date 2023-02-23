import { prisma } from "../database/db";
export async function getState() {
  let state = await prisma.state.findUnique({
    where: { id: 1 },
    select: { state: true },
  });
  return state;
}
