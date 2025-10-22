import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/shared/lib/counterSlice";
import userReducer from "@/entities/user/model/userSlice";
import dateReducer from "@/features/date-navigator/model/dateSlice";


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        date: dateReducer,
    },
});

// Типы для хуков
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;