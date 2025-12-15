import mongoose from "mongoose";
import dotenv from "dotenv";
import server from "./server.js";

dotenv.config();

mongoose.connect(process.env.dbConnectionKey);

server.listen( process.env.PORT,() => {
  console.log(`server is up on PORT:${process.env.PORT} ,maboy!`);
});