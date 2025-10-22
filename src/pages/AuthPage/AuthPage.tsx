import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/entities/user/model/userSlice";
import { useNavigate } from "react-router-dom";
import AnistaLogo from "@/assets/images/AnistaLogo.png";

const USERS: Record<string, "admin" | "master"> = {
    michael: "admin",
    mihail: "admin",
    михаил: "admin",
    anista: "admin",
    анастасия: "admin",
    алена: "master",
    виана: "master",
};

export const AuthPage = () => {
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const date = new Date().toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const normalized = name.trim().toLowerCase();
        const role = USERS[normalized];

        if (!role) {
            setError("⛔ Пользователь не найден. Обратитесь к администратору.");
            return;
        }

        dispatch(login({ name, role }));
        navigate("/dashboard");
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 overflow-hidden text-center">
            {/* Фоновый градиент */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 -z-10" />

            {/* Размытый логотип (фон под заголовком) */}
            <div
                className="absolute top-[25%] flex justify-center w-full opacity-40 blur-none animate-fadeIn pointer-events-none"
                style={{
                    animationDuration: "1.5s",
                    animationFillMode: "forwards",
                }}
            >
                <img
                    src={AnistaLogo}
                    alt="Anista logo blurred"
                    className="w-[240px] sm:w-[280px] md:w-[320px] object-contain"
                />
            </div>

            {/* Контент */}
            <div className="relative z-10 flex flex-col items-center justify-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-2">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Anista CRM
          </span>
                </h1>
                <p className="text-gray-500 text-sm mb-8">{date}</p>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center w-full max-w-sm"
                >
                    <input
                        type="text"
                        placeholder="Введите имя"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            if (error) setError("");
                        }}
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4
                     focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />

                    {error && (
                        <div className="text-red-500 text-sm mb-4" role="alert">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={!name.trim()}
                        className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-lg transition
                     focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Войти
                    </button>
                </form>
            </div>
        </div>
    );
};