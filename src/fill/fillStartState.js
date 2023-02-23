import { prisma } from "../database/db";

export async function fillStartState() {
  let switcherState = await prisma.state.findUnique({
    where: { id: 1 },
    select: { state: true },
  });
  if (switcherState == null) {
    await prisma.state.create({ data: { state: "Off" } });
  }
}
