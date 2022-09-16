import Fastify, { FastifyInstance, RouteShorthandOptions } from "fastify";
import "@fastify/middie";
import { Server, IncomingMessage, ServerResponse } from "http";

import router from "./routes";

const server: FastifyInstance = Fastify({
  logger: true,
});

// const opts: RouteShorthandOptions = {
//   schema: {
//     response: {
//       200: {
//         type: "object",
//         properties: {
//           pong: {
//             type: "string",
//           },
//         },
//       },
//     },
//   },
// };

server.register(router);

const start = async () => {
  try {
    await server.listen({ port: 3030 });

    const address = server.server.address();
    const port = typeof address === "string" ? address : address?.port;
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
