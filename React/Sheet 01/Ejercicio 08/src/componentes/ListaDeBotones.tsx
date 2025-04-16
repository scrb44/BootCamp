import Boton from "./Boton";

function ListaDeBotones(){
    return(<>
        <Boton texto="Hola" funcion={() => console.log("Hola")}/>
        <Boton texto="Adios" funcion={() => console.log("Adios")}/>
        <Boton texto="Cuatro" funcion={() => console.log("Cuatro")}/>
        <Boton texto="Vendeta" funcion={() => console.log("Vendeta")}/>
    </>);
}

export default ListaDeBotones;