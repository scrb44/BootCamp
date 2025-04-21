import "../css/tipos.css";

interface BotonTipoType {
    tipo: string;
}

function BotonTipo({ tipo }: BotonTipoType) {
    return <li className={`tipo type-${tipo}`}>{tipo}</li>;
}

export default BotonTipo;
