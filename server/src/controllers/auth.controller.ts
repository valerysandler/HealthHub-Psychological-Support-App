import { NextFunction, Request, Response, response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { BaseUserModel } from '../models/user.model';
import { authService } from '../services/auth.service';
import CredentialsModel from '../models/credentials.model';
import ClientError from '../models/clientError.model';
import userService from '../services/user.service';
import mailService from '../services/mail.service';
import jwt from 'jsonwebtoken';
import { Token, TokenModel } from '../models/tokens.models';
import bcrypt from 'bcrypt';

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
        const decodedToken: any = jwt.decode(token);
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
        const email = request.body.email;
        if (typeof email !== 'string') {
            response.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid email format' });
            return;
        }
        if (!email) {
            response.status(StatusCodes.BAD_REQUEST).json({ message: 'Email is required' });
            return;
        }
        // Check if user exists
        const user = await userService.getUserByParams({ email: email });
        if (!user) {
            response.status(StatusCodes.NOT_FOUND).json({ message: 'User not found' });
            return;
        }
        const token = await TokenModel.findOne({ userId: user._id });
        if (!token) {
            const token = new TokenModel({
                userId: user._id,
                token: jwt.sign({ email: email }, process.env.JWT_SECRET!, { expiresIn: '1h' })
            });
            await token.save();
        } else {
            token.token = jwt.sign({ email: email }, process.env.JWT_SECRET!, { expiresIn: '1h' });
            await token.save();
        }
    //    Create link with token as query param in url 
        const link = `${process.env.CLIENT_URL}/resetPassword/${token.token}`;
        console.log("Link", link);
        // await mailService.sendForgotPasswordLink(email, link);
       response.status(StatusCodes.OK).json({ link: link });
    } catch (error: any) {
        next(error);
    }
}

const resetPassword = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const user = await BaseUserModel.findById(request.params.userId);
        console.log("User", user);
        if (!user) {
            response.status(StatusCodes.NOT_FOUND).json({ message: 'User not found' });
            return;
        }
        const token = await TokenModel.findOne({ userId: user._id });
        if (!token) {
            response.status(StatusCodes.NOT_FOUND).json({ message: 'Token not found' });
            return;
        }
        // Hash password
        const hashedPassword = await bcrypt.hash(request.body.password, 10);

        user.password = hashedPassword;
        await user.save();
        await token.deleteOne();
        response.status(StatusCodes.OK).json({ message: 'Password reset successfully' });
    } catch (error: any) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
}

export default {
    register,
    login,
    logout,
    forgotPassword,
    resetPassword
};