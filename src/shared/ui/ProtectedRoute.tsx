import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "@/app/providers/hooks";

export const ProtectedRoute = ({ allowedRoles }: { allowedRoles?: string[] }) => {
    const user = useUser();

    // если пользователь не авторизован
    if (!user) {
        return <Navigate to="/" replace />;
    }

    // если есть список ролей и роль пользователя не входит в него
    if (allowedRoles && !allowedRoles.includes(user.role ?? "")) {
        return <Navigate to="/" replace />;
    }

    // всё ок — рендерим контент
    return <Outlet />;
};