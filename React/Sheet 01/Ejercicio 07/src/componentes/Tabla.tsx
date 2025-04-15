import Fila, { FilaTypes } from "./Fila";

interface TablaTypes {
    columnas: string[],
    filas: FilaTypes[]
}

function Tabla({columnas, filas} :TablaTypes){
    return (
    <table>
        <thead>
            {columnas.map((columna, index) => <th key={index}>{columna}</th>)}
        </thead>
        <tbody>
            {filas.map((fila, index) => <Fila key={index} datos={fila.datos}/>)}
        </tbody>
    </table>
    );
}

export default Tabla;