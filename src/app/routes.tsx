import {Routes, Route} from "react-router-dom";
import {DashboardPage} from "@/pages/DashboardPage";
import {ClientsPage} from "@/pages/ClientsPage";
import {SettingsPage} from "@/pages/SettingsPage";

const routes = [
    { path: "/", element: <DashboardPage /> },
    { path: "/clients", element: <ClientsPage /> },
    { path: "/settings", element: <SettingsPage /> },
];

export const RoutesApp = () => (
    <Routes>
        {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
        ))}
    </Routes>
);