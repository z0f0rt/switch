import { prisma } from "../database/db";
export async function switchState(futureState) {
  if (futureState === "on") {
    await prisma.state.update({
      where: { id: 1 },
      data: { state: "on" },
    });
  }
  if (futureState === "off") {
    await prisma.state.update({
      where: { id: 1 },
      data: { state: "on" },
    });
  }
}
