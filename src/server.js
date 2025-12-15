import express from "express";

const server = express();

server.use(express.json());

import infoRouter from './routers/inforouter.js';
server.use("/", infoRouter);

export default server;
