import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/providers/store";
import { AddVisitButton } from "@/features/add-visit/ui/AddVisitButton";
import { AddClientButton } from "@/features/add-client/ui/AddClientButton";
import { VisitCard } from "@/entities/visit/ui/VisitCard";
import { LiveClock } from "@/shared/ui/LiveClock";
import { Header } from "@/shared/ui/Header";
import { DateNavigator } from "@/features/date-navigator/ui/DateNavigator";
import { selectVisitsByDate } from "@/entities/visit/model/visitSlice";

export const DashboardPage: React.FC = () => {
    const user = useSelector((state: RootState) => state.user.currentUser);
    const visits = useSelector(selectVisitsByDate);

    if (!user) {
        return (
            <div className="flex items-center justify-center h-screen text-gray-500 text-lg">
                Не авторизован
            </div>
        );
    }

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <Header />

            {/* Заголовок и дата */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8">
                <div className="text-center sm:text-left">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Привет, {user.name}! 👋
                    </h1>
                    <p className="text-gray-500 mt-1 flex items-center justify-center sm:justify-start gap-2">
                        <LiveClock />
                    </p>
                </div>

                <DateNavigator />
            </div>

            {/* Кнопки добавления */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10 w-full sm:w-auto justify-center sm:justify-start">
                <AddVisitButton />
                <AddClientButton />
            </div>

            {/* Список визитов */}
            {visits.length > 0 ? (
                <div className="space-y-3 animate-fadeIn">
                    {visits.map((v) => (
                        <VisitCard key={v.id} visit={v} />
                    ))}
                </div>
            ) : (
                <div className="text-gray-400 text-center py-16 select-none">
                    Нет записей на выбранную дату 💤
                </div>
            )}
        </div>
    );
};