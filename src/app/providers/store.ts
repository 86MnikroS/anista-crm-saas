import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/shared/lib/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

// Типы для хуков
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;