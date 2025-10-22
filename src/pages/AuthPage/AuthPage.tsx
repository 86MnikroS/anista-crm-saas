import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/entities/user/model/userSlice";
import { useNavigate } from "react-router-dom";

export const AuthPage = () => {
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        const normalized = name.trim().toLowerCase();

        // 🔹 определяем роль
        let role: "admin" | "master" | null = null;

        if (["michael", "mihail", "михаил", "anista", "анастасия"].includes(normalized)) {
            role = "admin";
        } else if (["алена", "виана"].includes(normalized)) {
            role = "master";
        }

        // 🔸 если имя не в списке — не пускаем
        if (!role) {
            setError("⛔ Пользователь не найден. Обратитесь к администратору.");
            return;
        }

        // 🔹 если всё ок — логиним
        dispatch(login({ name, role }));
        navigate("/dashboard");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h1 className="text-2xl font-bold mb-4 text-center">Вход в систему</h1>
                <input
                    type="text"
                    placeholder="Введите имя"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        setError("");
                    }}
                    className="border border-gray-300 rounded px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                <button
                    onClick={handleLogin}
                    className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded transition"
                >
                    Войти
                </button>
            </div>
        </div>
    );
};