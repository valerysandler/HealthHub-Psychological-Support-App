import axios from "axios";
import CredentialsModel from "../Models/CredentialsModel";
import UserModel from "../Models/UserModel";
import { authStore } from "../Redux/Store";
import notifyService from "./NotifyService";

class AuthService {

    public async login(credentials: CredentialsModel) {
        try {
            const response = await axios.post("http://localhost:3001/api/auth/login", credentials);
            if (response.data.status === 401) {
                notifyService.error(response.data.message);
            } else if (response.data.status === 403) {
                notifyService.error(response.data.message);
            } else if (response.data.status === 404) {
                notifyService.error(response.data.message);
            }
            authStore.dispatch({ type: "UserLoggedIn", payload: response.data });
            return response.data.status;
        } catch (err: unknown) {
            notifyService.error(err as string);
        }

    }

    public async register(user: UserModel): Promise<void> {
        const response = await axios.post("http://localhost:3001/api/auth/register", user);
        if (response.data.status === 401) {
            throw new Error(response.data.message);
        }
        authStore.dispatch({ type: "UserRegistered", payload: response.data });

    }

    public async logout(): Promise<void> {
        await axios.post("http://localhost:3001/api/auth/logout");
    }

    public async getLoggedInUser(): Promise<UserModel> {
        const response = await axios.get<UserModel>("http://localhost:3001/api/auth/logged-in-user");
        return response.data;
    }

    public async isLoggedIn(): Promise<boolean> {
        try {
            await this.getLoggedInUser();
            return true;
        } catch (err) {
            return false;
        }
    }

    public async isAdmin(): Promise<boolean> {
        try {
            const user = await this.getLoggedInUser();
            return user.role === "admin";
        } catch (err) {
            return false;
        }
    }

    public async forgotPassword(email: string): Promise<string> {
        try {
            const response = await axios.post("http://localhost:3001/api/auth/forgot-password", email);
            console.log('response', response);
            return response.data.message;
        } catch (error) {
            console.log(error);
        }

    }
}

const authService = new AuthService();

export default authService;
