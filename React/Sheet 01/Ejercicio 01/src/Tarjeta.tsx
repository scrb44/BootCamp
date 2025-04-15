import './Tarjeta.css';

export interface TarjetaTypes {
    nombre: string;
    apellido: string;
    ocupacion: string;
    imagenUrl: string;
}

function Tarjeta({nombre, apellido, ocupacion, imagenUrl}: TarjetaTypes){

    return (
        <>
        <h1>{nombre}</h1>
        <h2>{apellido}</h2>
        <h3>{ocupacion}</h3>
        <img src={imagenUrl} alt={nombre} />
        </>
    );
}

export default Tarjeta