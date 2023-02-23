import { prisma } from "./database/db.js";
import { fillStartState } from "./fill/fillStartState";
import { switchState } from "./switcher/switchState";
import { getState } from "./state/getState";

const fastify = require("fastify")({
  logger: true,
});

fastify.get("/", function (request, reply) {
  reply.send("Попереключаем?м?");
});

fastify.get("/switch-on", function (request, reply) {
  let state = "on";
  switchState(state);
  reply.send("Включен!");
});

fastify.get("/switch-off", function (request, reply) {
  let state = "off";
  switchState(state);
  reply.send("Выключен!");
});

fastify.get("/status", function (request, reply) {
  let result = getState();
  if (result == "on") {
    reply.send("Включен!");
  }
  reply.send("Выключен");
});

fillStartState(prisma);

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
