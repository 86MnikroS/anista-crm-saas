import { Routes, Route } from "react-router-dom";
import { Dashboard } from "@/features/dashboard/Dashboard";
import { ClientsPage } from "@/pages/ClientsPage";
import { SettingsPage } from "@/pages/SettingsPage";

export const RoutesApp = () => (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
    </Routes>
);