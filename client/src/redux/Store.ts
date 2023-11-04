import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./states/AuthState";


export const authStore = configureStore({
    reducer: {
        authState: authReducer
    }
});
console.log('authStore', authStore.getState());
