"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
require("@fastify/middie");
const routes_1 = __importDefault(require("./routes"));
const server = (0, fastify_1.default)({
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
server.register(routes_1.default);
const start = async () => {
    try {
        await server.listen({ port: 3030 });
        const address = server.server.address();
        const port = typeof address === "string" ? address : address?.port;
    }
    catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};
start();
