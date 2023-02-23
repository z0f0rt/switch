const prisma = require("../database/db");

module.exports = async function getState() {
  let state = await prisma.state.findUnique({
    where: { id: 1 },
    select: { status: true },
  });
  return state;
};
