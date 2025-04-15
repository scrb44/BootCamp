import Tarjeta from "./Tarjeta";
import { TarjetaTypes } from "./Tarjeta";

function ListaDeTarjetas({nombre, apellido, ocupacion, imagenUrl}: TarjetaTypes){
    return (
        <>
        <Tarjeta apellido={apellido} imagenUrl={imagenUrl} nombre={nombre} ocupacion={ocupacion}/>
        <Tarjeta apellido={apellido} imagenUrl={imagenUrl} nombre={nombre} ocupacion={ocupacion}/>
        <Tarjeta apellido={apellido} imagenUrl={imagenUrl} nombre={nombre} ocupacion={ocupacion}/>
        </>
    );
}

export default ListaDeTarjetas;