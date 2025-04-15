export interface ProductoTypes {
    id: number,
    nombre: string,
    precio: number,
    descripcion: string
}
function Producto({nombre, precio, descripcion}: ProductoTypes){
    return (
        <article>
            <h1>{nombre} {precio} €</h1>
            <p>{descripcion}</p>
        </article>
    );
}

export default Producto;