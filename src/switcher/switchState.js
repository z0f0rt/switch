const prisma = require("../database/db");

module.exports = async function switchState(futureState) {
  let switcherState = await prisma.state.findUnique({
    where: { id: 1 },
    select: { status: true },
  });
  if (switcherState == null) {
    await prisma.state.create({ data: { id: 1, status: futureState } });
    return futureState;
  }
  if (futureState === "On") {
    await prisma.state.update({
      where: { id: 1 },
      data: { status: "On" },
    });
  }
  if (futureState === "Off") {
    await prisma.state.update({
      where: { id: 1 },
      data: { status: "Off" },
    });
  }
};
