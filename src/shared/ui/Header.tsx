import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/providers/store";
import { LogoutButton } from "@/shared/ui/LogOutButton";

export const Header = () => {
    const user = useSelector((state: RootState) => state.user.currentUser);

    return (
        <header className="bg-white border-b shadow-sm px-6 py-3 flex items-center justify-between sticky top-0 z-50">
            {/* Логотип / название */}
            <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-blue-600">Anista CRM</span>
            </div>

            {/* Информация о пользователе */}
            {user && (
                <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-600">
                        <span className="font-medium">{user.name}</span>
                        <span className="text-gray-400"> · {user.role}</span>
                    </div>
                    <LogoutButton />
                </div>
            )}
        </header>
    );
};