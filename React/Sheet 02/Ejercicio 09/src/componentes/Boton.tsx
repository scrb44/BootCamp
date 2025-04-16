interface BotonTypes {
    mensaje: string;
    funcionClick: () => void;
}

function Boton({ mensaje, funcionClick }: BotonTypes) {
    return <button onClick={funcionClick}>{mensaje}</button>;
}

export default Boton;
