import UserModel from "../../models/UserModel";

export class AuthState {
    public user: UserModel | null = null;
    public token: string | null = null;

    public constructor() {
        this.token = localStorage.getItem("token");
        if (this.token) {
            this.user = JSON.parse(localStorage.getItem("user")!);
        }
    }
}

export enum AuthActionType {
    UserRegistered = "UserRegistered",
    UserLoggedIn = "UserLoggedIn",
    UserLoggedOut = "UserLoggedOut",

}

export interface AuthAction {
    type: AuthActionType;
    payload?: string | UserModel;
}

export function userRegisteredAction(user: UserModel): AuthAction {
    return { type: AuthActionType.UserRegistered, payload: user };
}

export function userLoggedInAction(token: string): AuthAction {
    return { type: AuthActionType.UserLoggedIn, payload: token };
}

export function userLoggedOutAction(): AuthAction {
    return { type: AuthActionType.UserLoggedOut };
}

export function authReducer(currentState: AuthState = new AuthState(), action: AuthAction): AuthState {
    const newState = { ...currentState };
    switch (action.type) {
        case AuthActionType.UserRegistered:
        case AuthActionType.UserLoggedIn:
            newState.user = action.payload as UserModel;
            newState.token = newState.user.token;
            localStorage.setItem("token", newState.token);
            localStorage.setItem("user", JSON.stringify(newState.user));
            break;
        case AuthActionType.UserLoggedOut:
            newState.user = null;
            newState.token = null;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            break;
    }
    return newState;
}






