import { useState } from "react";
import Boton from "./Boton";

function Botones() {
    const [contador, setContador] = useState(0);
    return (
        <>
            <p>El contador vale: {contador}</p>
            <Boton
                mensaje="Sumar 1"
                funcionClick={() => setContador(contador + 1)}
            />
            <Boton
                mensaje="Restar 1"
                funcionClick={() => setContador(contador - 1)}
            />
            <Boton mensaje="Resetear a 0" funcionClick={() => setContador(0)} />
        </>
    );
}

export default Botones;
