import { StatusCodes } from "http-status-codes";
import ClientError from "../models/clientError.model";
import CredentialsModel, { ICredentialsModel } from "../models/credentials.model";
import { jwtService } from "./jwt.service";
import userService from "./user.service";
import bcrypt from "bcrypt";
import { Role } from "../models/role.model";
import { BaseUserModel } from "../models/user.model";
import mailService from '../services/mail.service';


class AuthService {
    public async register(user: BaseUserModel): Promise<string | unknown> {
        const userIsExist = await userService.getUserByParams({ email: user.email });
        if (userIsExist) {
            return new ClientError(StatusCodes.UNAUTHORIZED, `User with email ${user.email} or phone ${user.phone} already exist`);
        }
        console.log("User password ", user.password);
        user.password = await bcrypt.hash(user.password, 10);
        console.log("Hashed user password", user.password);
        user.role = Role.baseUser;
        const result = await user.save();
        console.log("User created: ", result);
        // await sendEmail(user.email); // Uncommend this 
        // Create tokens for user and session and save them in database
        const token = await jwtService.generateJwtToken(user);
        user.token = token;
        await user.save();
        return {
            token: token,
        };
    }

    public async login(credentials: ICredentialsModel): Promise<string | unknown> {
        console.log("Credentials ", credentials);
        // Find user by email or phone
        const user = await userService.getUserByParams({ email: credentials.email });
        if (!user) {
            return new ClientError(StatusCodes.NOT_FOUND, `User with email ${credentials.email} not found`);
        }
        console.log("User  ", user);
        // Compare passwords
        const passwordIsCorrect = await bcrypt.compare(credentials.password, user.password);
        if (!passwordIsCorrect) {
            return new ClientError(StatusCodes.UNAUTHORIZED, `Password is incorrect`);
        }
        // Change user status to active
        user.isActive = true;
        await user.save();
        // Create tokens for user and session and save them in database
        const token = await jwtService.generateJwtToken(user);
        user.token = token;
        await user.save();
        return {
            token: token,
        };
    }

    public async logout(userId: string): Promise<void> {
        const user = await userService.getUserByParams({ _id: userId });
        if (!user) {
            return;
        }
        user.isActive = false;
        await user.save();
        // Delete token from database
        await jwtService.deleteJwtToken(userId);
    }

    public async forgotPassword(email: string): Promise<void> {
        const user = await BaseUserModel.findOne({ email: email })
        if (!user) {
            return;
        }
        // Generate token
        const token = await jwtService.generateJwtToken(user);
        await mailService.sendForgotPasswordLink(email, token); // Uncommend this

    }
}



export const authService = new AuthService();