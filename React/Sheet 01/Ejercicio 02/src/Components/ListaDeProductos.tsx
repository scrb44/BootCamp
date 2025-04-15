import Producto, { ProductoTypes } from "./Producto";

function ListaDeProductos(){
    const lista: ProductoTypes[] = [{
        id: 1,
        nombre: "Patata",
        precio: 4.99,
        descripcion: "Patatas del huerto" 
    },{
        id: 2,
        nombre: "Sandía",
        precio: 9.99,
        descripcion: "Las mas grandes del mercado"
    }, {
        id: 3,
        nombre: "Meloconotes",
        precio: 2.99,
        descripcion: "Corre que me lo quitan de las manos niña"
    }];

    return (
        <>
        {lista.map((producto: ProductoTypes) => <Producto key={producto.id} {...producto}/>)}
        </>
    );
}

export default ListaDeProductos;