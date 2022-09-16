"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../services/user"));
// import
// const routes: FastifyInstance = Fastify({
//   logger: true,
// });
// routes.get("/", async (req, res) => {
//   console.log("유저");
//   res.send("user!!!!!!!!!!!");
// });
async function routes(routes, options) {
    routes.get("/", async (req, res) => {
        const user = await user_1.default.userInfo();
        res.send(user);
    });
}
exports.default = routes;
