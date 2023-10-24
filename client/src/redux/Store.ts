import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./states/AuthState";


export const authStore = configureStore({
    reducer: {
        authState: authReducer
    }
});
2
