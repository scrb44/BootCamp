import "./TextoFormateado.css"

interface TextoFormateadoTypes {
    texto: string,
    negrita?: boolean,
    cursiva?: boolean
}

function TextoFormateado({texto, negrita, cursiva}: TextoFormateadoTypes){
    let estilos: string = ""


    if(negrita) estilos = "negrita ";
    if(cursiva) estilos += "cursiva";

    return <p className={estilos}>{texto}</p>
}

export default TextoFormateado;