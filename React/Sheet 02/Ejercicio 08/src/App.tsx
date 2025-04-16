import { useEffect, useState } from "react";
import "./App.css";

enum Tema {
    Claro = "claro",
    Oscuro = "oscuro",
}

function App() {
    const [temaActual, setTemaActual] = useState(Tema.Claro);

    useEffect(() => {
        const body = document.querySelector("body");

        body?.classList.remove(Tema.Claro, Tema.Oscuro);
        body?.classList.add(temaActual);
    }, [temaActual]);
    return (
        <>
            <button
                onClick={() =>
                    temaActual == Tema.Claro
                        ? setTemaActual(Tema.Oscuro)
                        : setTemaActual(Tema.Claro)
                }
            >
                Cambiar a {temaActual === Tema.Claro ? "Oscuro" : "Claro"}
            </button>
        </>
    );
}

export default App;
