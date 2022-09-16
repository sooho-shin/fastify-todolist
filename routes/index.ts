import Fastify, {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import fp from "fastify-plugin";
// import userRouter from "./user";

// const fastify: FastifyInstance = Fastify({
//   logger: true,
// });

// fastify.register(userRouter);

async function routes(server: FastifyInstance, options: FastifyPluginOptions) {
  server.get("/", async (req: FastifyRequest, res: FastifyReply) => {
    res.send("안녕");
  });
  //   server.use("/user", userRouter);
  server.get("/ping", async (req, res) => {
    // req.log.error("test log");
    return { pong: "it worked!" };
  });
}

export default routes;
