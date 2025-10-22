import { Outlet } from "react-router-dom";

export const AppShell = () => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
            {/* Фоновые декоративные элементы */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
            >
                <div className="absolute -z-10 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl top-[-150px] left-[-100px]" />
                <div className="absolute -z-10 w-[400px] h-[400px] bg-pink-200/40 rounded-full blur-3xl bottom-[-120px] right-[-80px]" />
                <div className="absolute -z-10 w-[600px] h-[600px] bg-purple-200/30 rounded-full blur-3xl bottom-[100px] left-[150px]" />
                <div className="absolute -z-10 w-96 h-96 bg-white/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Область контента (никаких карточек – чистый фон + отступы) */}
            <main className="relative z-10 px-4 py-8 sm:px-6 md:px-10">
                <Outlet />
            </main>
        </div>
    );
};