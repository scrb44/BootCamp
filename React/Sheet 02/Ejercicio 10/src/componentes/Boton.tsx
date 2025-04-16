interface BotonTypes {
    texto: string;
    funcion: () => void;
}

function Boton({ texto, funcion }: BotonTypes) {
    return <button onClick={funcion}>{texto}</button>;
}

export default Boton;
