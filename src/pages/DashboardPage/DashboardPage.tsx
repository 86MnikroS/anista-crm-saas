import React from "react";
import {AddVisitButton} from "@/features/add-visit/ui/AddVisitButton";
import {AddClientButton} from "@/features/add-client/ui/AddClientButton";
import {VisitCard} from "@/entities/visit/ui/VisitCard";
import {LiveClock} from "@/shared/ui/LiveClock";
import {useSelector} from "react-redux";
import {RootState} from "@/app/providers/store";
import {Header} from "@/shared/ui/Header"
import {LogoutButton} from "@/shared/ui/LogOutButton";
import {DateNavigator} from "@/features/date-navigator/ui/DateNavigator";

export const DashboardPage: React.FC = () => {
    const user = useSelector((state: RootState) => state.user.currentUser);

    if (!user) {
        return <div className="text-center mt-10 text-gray-500">Не авторизован</div>;
    }

    const now = new Date();
    const formattedDate = now.toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    const visits = [
        {name: "Ольга", time: "09:30", service: "Массаж спины", phone: "050-1234567"},
        {name: "Марина", time: "11:00", service: "Антицеллюлитный", phone: "054-9876543"},
        {name: "Юлия", time: "14:00", service: "Расслабляющий массаж", phone: "052-7654321"},
    ];

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <Header/>
            <div className="p-6 max-w-3xl mx-auto">
                {/* остальной контент */}
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
                <div className="text-center sm:text-left">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                        Привет, {user.name}! 👋
                    </h1>
                    <p className="text-gray-500 mt-1">
                        <LiveClock/> — <span className="capitalize">{formattedDate}</span>
                    </p>
                </div>

                {/* Навигация по дате */}
                <DateNavigator/>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-8 w-full sm:w-auto">
                <AddVisitButton/>
                <AddClientButton/>
            </div>

            <div className="space-y-3">
                {visits.map((v) => (
                    <VisitCard key={v.phone} {...v} />
                ))}
            </div>

        </div>
    );
};