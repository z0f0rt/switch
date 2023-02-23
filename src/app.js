const prisma = require("./database/db.js");
const initState = require("./fill/fillStartState");
const switcher = require("./switcher/switchState");

initState(prisma);

const fastify = require("fastify")({
  logger: true,
});

fastify.get("/", async function (request, reply) {
  reply.send("Попереключаем?м?");
});

fastify.get("/switch-on", async function (request, reply) {
  switcher("On");
  reply.send("Включен");
});

fastify.get("/switch-off", async function (request, reply) {
  switcher("Off");
  reply.send("Выключен");
});

fastify.get("/status", async function (request, reply) {
  let state = await prisma.state.findUnique({
    where: { id: 1 },
    select: { status: true },
  });
  if (state === null) {
    await prisma.state.create({ data: { id: 1, status: "Off" } });
    return "Off";
  }
  reply.send(state.status);
});

fastify.listen({ port: 3000 }, async function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
