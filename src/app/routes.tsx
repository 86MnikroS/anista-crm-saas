import React from "react";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import { ProtectedRoute } from "@/shared/ui/ProtectedRoute";
import { DashboardPage } from "@/pages/DashboardPage/DashboardPage";
import { ClientsPage } from "@/pages/ClientsPage";
import { SettingsPage } from "@/pages/SettingsPage";
import { AuthPage } from "@/pages/AuthPage/AuthPage"; // можно создать позже

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* публичные страницы */}
            <Route path="/" element={<AuthPage />} />

            {/* защищённые маршруты */}
            <Route element={<ProtectedRoute allowedRoles={["admin", "master"]} />}>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/clients" element={<ClientsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Route>
        </>
    )
);

export const AppRoutes = () => {
    return <RouterProvider router={router} />;
};