import { StatusCodes } from "http-status-codes";
import ClientError from "../models/client-error";
import CredentialsModel, { ICredentialsModel } from "../models/credentials.model";
import { SpecialistModel } from "../models/specialist.model";
import { IUserModel, UserModel } from "../models/user.model";
import { jwtService } from "./jwt.service";
import { sendEmail } from "./sendEmail.service";
import userService from "./user.service";
import bcrypt from "bcrypt";

class AuthService {
    public async register(user: IUserModel): Promise<string | unknown> {
        const userIsExist = await userService.getUserByParams({ email: user.email});
        if (userIsExist) {
            return new ClientError(StatusCodes.UNAUTHORIZED, `User with email ${user.email} or phone ${user.phone} already exist`);
        }
        console.log("User password ", user.password);
        user.password = await bcrypt.hash(user.password, 10);
        console.log("Hashed user password", user.password);
        if (user.isSpecialist === true) {
            const specialist = new SpecialistModel(user);
            specialist.userId = user._id;
            const errors = specialist.validateSync();
            if (errors) {
                return errors.message;
            }

            const result = await specialist.save();
            console.log("Specialist created: ", result);
        }
        const result = await user.save();
        console.log("User created: ", result);
        // await sendEmail(user.email); // Uncommend this 
        // Create tokens for user and session and save them in database
        const token = await jwtService.generateJwtToken(user);
        console.log("Token ", token);
        return token;
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
        // Create tokens for user and session and save them in database
        const token = await jwtService.generateJwtToken(user);
        return token;
    }

}

export const authService = new AuthService();