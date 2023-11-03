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
import path from "path";

//  Init express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(expressUpload());
app.use(express.static('public'));
app.set('views engine', 'ejs');
app.set('views', './views');

// Error handler
app.use(errorsHandler);


//  Routes
app.use("/api/auth", authRouter);
app.use("/api/role", roleRouter);
app.use("/api/auth/google", googleAuthRouter);

app.use("/api/auth/google", googleAuthRouter);
// Listen unhandleRejection
process.on("unhandledRejection", (reason, promise) => {
    console.log("Unhandled Rejection at:", promise, "reason:", reason);
});



//  Start app
app.listen(config.port, () => console.log(`Server started on port ${config.port}`));
