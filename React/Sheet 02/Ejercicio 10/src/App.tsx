import { useState } from "react";
import "./App.css";
import Boton from "./componentes/Boton";

function App() {
    const [favoritos, setFavoritos] = useState<string[]>([]);
    const totales = [
        "Juramentada",
        "Escuadron",
        "Dune",
        "Eragon",
        "La daga de la ceguera",
        "Elantris",
    ];

    const agregarFavorito = (libro: string) => {
        setFavoritos((prev) =>
            prev.includes(libro) ? prev : [...prev, libro]
        );
    };

    return (
        <>
            <p>Lista total: </p>
            <ul>
                {totales.map((libro, indice) => (
                    <div key={indice} className="libro-item">
                        <li>{libro}</li>
                        {favoritos.includes(libro) ? undefined : (
                            <Boton
                                texto="Añadir a favoritos"
                                funcion={() => agregarFavorito(libro)}
                            />
                        )}
                    </div>
                ))}
            </ul>

            <p>Lista de favoritos: </p>
            <ul>
                {favoritos.map((fav, index) => (
                    <li key={index}>{fav}</li>
                ))}
            </ul>
        </>
    );
}

export default App;
