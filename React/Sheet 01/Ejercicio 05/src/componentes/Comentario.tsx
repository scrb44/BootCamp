interface ComentarioTypes {
    autor: string,
    fecha: string,
    contenido: string
}
function Comentario({autor, fecha, contenido}: ComentarioTypes) {
    return (
        <article>
            <h1>{autor}</h1>
            <h2>{fecha}</h2>
            <p>{contenido}</p>
        </article>
    );
}

export default Comentario;