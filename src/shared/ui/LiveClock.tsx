import React from "react";

export const LiveClock: React.FC = () => {
    const [time, setTime] = React.useState(() =>
        new Date().toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit",
        })
    );

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(
                new Date().toLocaleTimeString("ru-RU", {
                    hour: "2-digit",
                    minute: "2-digit",
                })
            );
        }, 60_000); // обновление каждую минуту
        return () => clearInterval(interval);
    }, []);

    return <span>{time}</span>;
};