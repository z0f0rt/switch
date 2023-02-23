// import { prisma } from "./database/db.js";
// import { fillStartState } from "./fill/fillStartState";
// import { switchState } from "./switcher/switchState";
// import { getState } from "./state/getState";
const prisma = require("./database/db.js");
const initState = require("./fill/fillStartState");
const switcher = require("./switcher/switchState");

initState(prisma);

const fastify = require("fastify")({
  logger: true,
});

fastify.get("/", function (request, reply) {
  reply.send("Попереключаем?м?");
});

fastify.get("/switch-on", function (request, reply) {
  switcher("On");
  reply.send("Включен");
});

fastify.get("/switch-off", function (request, reply) {
  switcher("Off");
  reply.send("Выключен");
});

fastify.get("/status", async function (request, reply) {
  let state = await prisma.state.findUnique({
    where: { id: 1 },
    select: { status: true },
  });
  reply.send(state.status);
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
