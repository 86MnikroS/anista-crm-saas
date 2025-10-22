import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Типизированные хуки Redux
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Хук для получения текущего пользователя
export const useUser = () => {
    return useAppSelector((state) => state.user.currentUser);
};