import CredentialsModel from "../models/CredentialsModel";
import UserModel from "../models/UserModel";

class AuthService {
    public async login(credentials: CredentialsModel): Promise<UserModel[]> {
        const response = await fetch("http://localhost:3001/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ credentials }),
        });

        return response.json();
    }
}

const authService = new AuthService();

export default authService;
