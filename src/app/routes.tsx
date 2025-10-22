import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { AppShell } from "@/app/providers/AppShell";
import { AuthPage } from "@/pages/AuthPage/AuthPage";
import { DashboardPage } from "@/pages/DashboardPage/DashboardPage";
import { ClientsPage } from "@/pages/ClientsPage";
import { SettingsPage } from "@/pages/SettingsPage";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppShell />}>
                    <Route index element={<AuthPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/clients" element={<ClientsPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};