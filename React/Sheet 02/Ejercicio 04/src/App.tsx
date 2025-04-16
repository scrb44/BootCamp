import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

enum ColorSemaforo {
    Rojo = "Rojo",
    Amarillo = "Amarillo",
    Verde = "Verde",
}

function App() {
    const [color, setColor] = useState<ColorSemaforo>(ColorSemaforo.Rojo);

    const handleColor = () => {
        if (color == ColorSemaforo.Rojo) setColor(ColorSemaforo.Verde);
        if (color == ColorSemaforo.Amarillo) setColor(ColorSemaforo.Rojo);
        if (color == ColorSemaforo.Verde) setColor(ColorSemaforo.Amarillo);
    };

    return (
        <>
            <p>El semaforo esta de color: {color}</p>
            <button onClick={handleColor}>Cambia el semaforo</button>
        </>
    );
}

export default App;
