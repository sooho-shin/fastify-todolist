"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
console.log("hello world");
const server = (0, fastify_1.default)({
    bodyLimit: 10485760,
    logger: true,
});
server.listen({ port: 3000 });
