import { NextFunction, Request, Response, response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UserModel } from '../models/user.model';
import { authService } from '../services/auth.service';
import CredentialsModel from '../models/credentials.model';
import ClientError from '../models/client-error';

const register = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const user = new UserModel(request.body);
        console.log("User", user);
      
        // Create tokens for user and session and save them in database
        const token = await authService.register(user);
        if (token === ClientError) {
            response.status(StatusCodes.UNAUTHORIZED).json(token);
            return;
        }
        response.status(StatusCodes.CREATED).json(token);
    } catch (error: any) {
        next(error.message)
    }
};

const login = async (request: Request, response: Response, next: NextFunction) => {
    try {
        console.log("Request body", request.body);
        const credentials = new CredentialsModel(request.body);
        console.log("Cedentials", credentials);
        const token = await authService.login(credentials);
        if (token === ClientError) {
            response.status(StatusCodes.NOT_FOUND).json(token);
            return;
        }
        response.status(StatusCodes.OK).json(token);
    } catch (error: any) {
        next(error);
    }
};

export default {
    register,
    login,
};