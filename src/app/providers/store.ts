import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/shared/lib/counterSlice";
import userReducer from "@/entities/user/model/userSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
    },
});

// Типы для хуков
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;