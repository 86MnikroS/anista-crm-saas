import React from "react";
import { AddVisitButton } from "@/features/add-visit/ui/AddVisitButton";
import { AddClientButton } from "@/features/add-client/ui/AddClientButton";
import { VisitCard } from "@/entities/visit/ui/VisitCard";
import { LiveClock } from "@/shared/ui/LiveClock";
import { useSelector } from "react-redux";
import { RootState } from "@/app/providers/store";
import { Header } from "@/shared/ui/Header";
import { DateNavigator } from "@/features/date-navigator/ui/DateNavigator";
import { selectVisitsByDate } from "@/entities/visit/model/visitSlice";

export const DashboardPage: React.FC = () => {
    const user = useSelector((state: RootState) => state.user.currentUser);
    const visits = useSelector(selectVisitsByDate);

    if (!user) {
        return <div className="text-center mt-10 text-gray-500">Не авторизован</div>;
    }

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <Header />

            <div className="p-6 max-w-3xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-6">
                    <div className="text-center sm:text-left">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                            Привет, {user.name}! 👋
                        </h1>
                        <p className="text-gray-500 mt-1">
                            <LiveClock />
                        </p>
                    </div>

                    <DateNavigator />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-8 w-full sm:w-auto">
                    <AddVisitButton />
                    <AddClientButton />
                </div>

                <div className="space-y-3">
                    {visits.length > 0 ? (
                        visits.map((v) => <VisitCard key={v.id} {...v} />)
                    ) : (
                        <div className="text-gray-400 text-center py-10">
                            Нет записей на выбранную дату 💤
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};