const prisma = require("../database/db");

module.exports = async function switchState(futureState) {
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
