import { PropsWithChildren } from "react";

interface TarjetaPrincipalTypes{
    titulo: string,
    subtitulo: string,
}

function TarjetaPrincipal ({titulo, subtitulo, children}: PropsWithChildren<TarjetaPrincipalTypes>) {
    return (
        <article>
            <h1>{titulo}</h1>
            <h2>{subtitulo}</h2>
            <div>{children}</div>
        </article>
    );
}

export default TarjetaPrincipal;