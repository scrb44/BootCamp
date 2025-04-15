import { PropsWithChildren } from "react";

interface PerfilTypes {
    imagenURL: string,
    nombre: string,
}

function Perfil({imagenURL, nombre, children}: PropsWithChildren<PerfilTypes>){
    return (
        <article>
            <h1>{nombre}</h1>
            <img src={imagenURL} alt={nombre} />
            <p>{children}</p>
        </article>
    );
}

export default Perfil;