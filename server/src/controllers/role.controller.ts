import { NextFunction, Request, Response, response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { BaseUserModel } from '../models/user.model';
import { Role } from '../models/role.model';
import userService from '../services/user.service';

const specialistRole = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { userId, role } = request.body;
        if (!userId) {
            response.status(StatusCodes.BAD_REQUEST).json({ message: 'User id is required' });
            return;
        }
        if (!role) {
            response.status(StatusCodes.BAD_REQUEST).json({ message: 'Role is required' });
            return;
        }
        const user = await userService.getUserByParams({ _id: userId });
        if (!user) {
            response.status(StatusCodes.NOT_FOUND).json({ message: 'User not found' });
            return;
        }
        console.log("User ", user);
        if (user) {
            if (role === "specialist") {
                if (!user.isSpecialist) {
                    user.isSpecialist = true;
                }
                // Change user role from base user to specialist
                user.role = Role.specialist;
                await user.save();
            } else {
                response.status(StatusCodes.OK).json({ message: 'Not specialist role' });
            }
        } else {
            response.status(StatusCodes.NOT_FOUND).json({ message: 'User not found' });
        }
        response.status(StatusCodes.OK).json({ message: 'Specialist role' });
    } catch (error: any) {
        next(error);
    }
}

const patientRole = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const { userId, role } = request.body;
        if (!userId) {
            response.status(StatusCodes.BAD_REQUEST).json({ message: 'User id is required' });
            return;
        }
        if (!role) {
            response.status(StatusCodes.BAD_REQUEST).json({ message: 'Role is required' });
            return;
        }
        const user = await userService.getUserByParams({ _id: userId });
        if (!user) {
            response.status(StatusCodes.NOT_FOUND).json({ message: 'User not found' });
            return;
        }
        console.log("User ", user);
        if (role === "patient") {
            if (user.isSpecialist) {
                user.isSpecialist = false;
            }
            // Change user role from base user to patient
            user.role = Role.patient;
            await user.save();
            console.log("User ", user);
        } else {
            response.status(StatusCodes.OK).json({ message: 'Not patient role' });
        }
        response.status(StatusCodes.OK).json({ message: 'Patient role' });
    } catch (error: any) {
        next(error);
    }
}

const adminRole = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const user = request.body;
        if (user.role === "admin") {
            response.status(StatusCodes.OK).json({ message: 'Admin role' });
        } else {
            response.status(StatusCodes.OK).json({ message: 'Not admin role' });
        }
    } catch (error: any) {
        next(error);
    }
}

export default {
    specialistRole,
    patientRole,
    adminRole
}; 1