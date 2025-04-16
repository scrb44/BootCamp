import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const hour = date.getHours();
    const minutes =
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const seconds =
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    return (
        <p>
            Hora actual: {hour}:{minutes}:{seconds}
        </p>
    );
}

export default App;
