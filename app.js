const fastify = require("fastify")({
  logger: true,
});
const state = {
  switch: "off",
};

fastify.get("/", function (request, reply) {
  reply.send("Hello. Switch me!");
  console.log("Hello. Switch me!");
});

fastify.get("/switch-on", function (request, reply) {
  state.switch = "on";
  const on = state.switch;
  reply.send(on);
  console.log(state);
});

fastify.get("/switch-off", function (request, reply) {
  state.switch = "off";
  const off = state.switch;
  reply.send(off);
  console.log(state);
});

fastify.get("/status", function (request, reply) {
  const status = state.switch;
  reply.send(status);
  console.log(state);
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
