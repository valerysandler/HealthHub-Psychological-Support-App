import jwt from 'jsonwebtoken';
import { IUserModel, UserModel } from '../models/user.model';
import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';

const generateJwtToken = async (user: IUserModel) => {
    const payload = {
        user : {
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
        }
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

const verifyToken = async (token: string) => {
    return jwt.verify(token, process.env.JWT_SECRET!);
}

export const jwtService = {
    generateJwtToken,
    generateRefreshToken,
    verifyToken
};