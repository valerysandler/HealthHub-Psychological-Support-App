import axios from "axios";
import CredentialsModel from "../models/CredentialsModel";
import UserModel from "../models/UserModel";
import { authStore } from "../redux/Store";

class AuthService {
    public async login(credentials: CredentialsModel): Promise<UserModel> {
        const response = await axios.post("http://localhost:3001/api/auth/login", credentials);
        if (response.data.status === 404) {
            throw new Error(response.data.message);
        }
        authStore.dispatch({ type: "UserLoggedIn", payload: response.data });
        return response.data;

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
}

const authService = new AuthService();

export default authService;
