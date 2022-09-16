"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import userRouter from "./user";
// const fastify: FastifyInstance = Fastify({
//   logger: true,
// });
// fastify.register(userRouter);
async function routes(server, options) {
    server.get("/", async (req, res) => {
        res.send("안녕");
    });
    //   server.use("/user", userRouter);
    server.get("/ping", async (req, res) => {
        // req.log.error("test log");
        return { pong: "it worked!" };
    });
}
exports.default = routes;
