import Comentario from "./Comentario";

function ListaDeComentarios(){
    return (
        <>
        <Comentario autor="Yo" fecha="Hoy" contenido="Hola buenos dias"/>
        <Comentario autor="Tu" fecha="Hoy" contenido="Hola buenos dias"/>
        <Comentario autor="Él" fecha="Hoy" contenido="Hola buenos dias"/>
        <Comentario autor="Ella" fecha="Hoy" contenido="Hola buenos dias"/>
        </>
    );
}

export default ListaDeComentarios;