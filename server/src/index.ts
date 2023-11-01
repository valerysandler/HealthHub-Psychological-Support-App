import dotenv from "dotenv";
dotenv.config();
import dal from "./dal/mongoConnect";
dal.connectToMongoDB();
import express from "express";
import cors from "cors";
import expressUpload from 'express-fileupload';
import config from "./utils/config";
import errorsHandler from "./middleware/errors-handler";
import { authRouter } from './routers/auth.router';
import { googleAuthRouter } from "./routers/googleAuth.router";
import { roleRouter } from "./routers/role.router";

//  Init express
const server = express();

// Middleware
server.use(cors());
server.use(express.json());
server.use(expressUpload());
server.use(express.static('public'));
// Error handler
server.use(errorsHandler);


//  Routes
server.use("/api/auth", authRouter);
server.use("/api/role", roleRouter);

server.use("/api/auth/google", googleAuthRouter);

//  Start server
server.listen(config.port, () => console.log(`Server started on port ${config.port}`));
