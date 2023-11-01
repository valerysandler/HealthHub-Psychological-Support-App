import { NextFunction, Request, Response, response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { BaseUserModel } from '../models/user.model';
import { authService } from '../services/auth.service';
import CredentialsModel from '../models/credentials.model';
import ClientError from '../models/clientError.model';
import { jwtService } from '../services/jwt.service';
import userService from '../services/user.service';
import mailService from '../services/mail.service';

const login = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const credentials = new CredentialsModel(request.body);
        const token = await authService.login(credentials);
        if (token === ClientError) {
            response.status(StatusCodes.NOT_FOUND).json(token);
            return;
        }
        response.status(StatusCodes.OK).json({
            token: token,
        });
        console.log("Response", response);
    } catch (error: any) {
        next(error);
    }
};


const register = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const user = new BaseUserModel(request.body);
        const errors = user.validateSync();
        if (errors) {
            response.status(StatusCodes.BAD_REQUEST).json(errors);
            return;
        }
        const token = await authService.register(user);
        if (token === ClientError) {
            response.status(StatusCodes.UNAUTHORIZED).json(token);
            return;
        }
        response.status(StatusCodes.CREATED).json({
            token: token,
        });
    } catch (error: any) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
};

const logout = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { token } = request.body;
        const decodedToken: any = await jwtService.decodeToken(token);
        console.log("Decoded token", decodedToken);
        if (!decodedToken) {
            response.status(StatusCodes.UNAUTHORIZED).json({ message: 'Unauthorized' });
            return;
        }
        const userId = decodedToken.user.id;
        console.log("User id", userId);
        // Delete token from database
        const deletedToken = authService.logout(userId);
        console.log("Deleted token", deletedToken);
        response.status(StatusCodes.OK).json({ message: 'User logged out' });
    } catch (error: any) {
        next(error);
    }
}

const forgotPassword = async (request: Request, response: Response, next: NextFunction) => {
    try {
        console.log("Forgot password")
        const { email } = request.body;
        console.log("Email", email);
        if (!email) {
            response.status(StatusCodes.BAD_REQUEST).json({ message: 'Email is required' });
            return;
        }
        // Check if user exists
        const user = await userService.getUserByParams({ email: email });
        console.log("User", user);
        if (!user) {
            response.status(StatusCodes.NOT_FOUND).json({ message: 'User not found' });
            return;
        }
        // Create token 
        const token = await jwtService.generateJwtToken(email);
        console.log("Token", token);
        // Send email with link to reset password
        await mailService.sendForgotPasswordLink(email, token);
        response.status(StatusCodes.OK).json({ message: 'Email sent' });
    } catch (error: any) {
        next(error);
    }
}

const resetPassword = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { token } = request.params;
        // Проверьте, действителен ли токен и не истек
        const decodedToken: any = await jwtService.decodeToken(token);
        console.log("Decoded token", decodedToken);
        // Если токен действителен, позвольте пользователю ввести новый пароль
        const { password } = request.body;
        if (!password) {
            response.status(StatusCodes.BAD_REQUEST).json({ message: 'Password is required' });
            return;
        }
        const userId = decodedToken.user.id;
        console.log("User id", userId);
        // Удалите токен из базы данных
        await jwtService.deleteJwtToken(userId);
        response.status(StatusCodes.OK).json({ message: 'Password reset' });
        // Обновите пароль пользователя в базе данных
        const user = await userService.getUserByParams({ _id: userId });
        if (!user) {
            return;
        }
        user.password = password;
        await user.save();
        response.status(StatusCodes.OK).json({ message: 'Password reset' });
    } catch (error: any) {
        next(error);
    }
}

export default {
    register,
    login,
    logout,
    forgotPassword,
    resetPassword

};