import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "@/entities/user/model/userSlice";
import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
    };

    return (
        <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
        >
            Выйти
        </button>
    );
};