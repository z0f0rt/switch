const prisma = require("../database/db");

module.exports = async function initState() {
  let switcherState = await prisma.state.findUnique({
    where: { id: 1 },
    select: { status: true },
  });
  if (switcherState == null) {
    await prisma.state.create({ data: { id: 1, status: "Off" } });
    return "Off";
  }
};
