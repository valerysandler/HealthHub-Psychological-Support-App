import jwt from 'jsonwebtoken';
import { BaseUserModel } from '../models/user.model';
import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import userService from './user.service';

const generateJwtToken = async (user: BaseUserModel) => {
    const payload = {
        user: {
            token: user.token,
            id: user._id,
            email: user.email,
            phone: user.phone,
            isSpecialist: user.isSpecialist,
            role: user.role,
            firstName: user.firstName,
            lastName: user.lastName,
            birthDate: user.birthDate,
            country: user.country,
            city: user.city,
            address: user.address,
            isActive: user.isActive,
            isConfirmed: user.isConfirmed,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        } as BaseUserModel
    };
    return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '24h' });
}

const generateRefreshToken = async (id: string, email: string, phone: string, isSpecialist: boolean) => {
    const payload = {
        id,
        email,
        phone,
        isSpecialist
    };
    return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '30d' });
}
const decodeToken = async (token: string) => {
    return jwt.decode(token);
}

const verifyToken = async (token: string) => {
    return jwt.verify(token, process.env.JWT_SECRET!);
}

const deleteJwtToken = async (userId: string) => {
    try {
        console.log("User id", userId);
        // Delete token from database
        const user = await userService.getUserByParams({ _id: userId });
        console.log("User", user);
        if (!user) {
            return;
        }
        user.token = null;
        await user.save();
        return user;
    } catch (error: any) {
        console.log(error.message);
    }
}

export const jwtService = {
    generateJwtToken,
    generateRefreshToken,
    decodeToken,
    verifyToken,
    deleteJwtToken
};