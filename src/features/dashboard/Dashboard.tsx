import { Link } from "react-router-dom";

export const Dashboard = () => (
    <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold text-brand-700">Anista CRM</h1>
        <p className="text-gray-600">Панель управления</p>
        <div className="flex gap-3">
            <Link to="/clients" className="px-4 py-2 bg-brand-500 text-white rounded hover:bg-brand-700">
                Клиенты
            </Link>
            <Link to="/settings" className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
                Настройки
            </Link>
        </div>
    </div>
);