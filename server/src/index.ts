import dotenv from "dotenv";
dotenv.config();
import dal from "./dal/dal";
dal.connectToMongoDB();
import express from "express";
import cors from "cors";
import config from "./utils/config";
import errorsHandler from "./middleware/errors-handler";
import { authRouter } from './routers/auth.router';
import { googleAuthRouter } from "./routers/googleAuth.router";

//  Init express
const server = express();

server.use(cors());
server.use(express.json());
server.use(errorsHandler);

//  Routes
server.use("/api/auth", authRouter);
// Google auth
server.use("/api/auth/google", googleAuthRouter);

//  Start server
server.listen(config.port, () => console.log(`Server started on port ${config.port}`));
