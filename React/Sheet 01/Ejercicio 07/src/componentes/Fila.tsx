export interface FilaTypes{
    datos: number[]
}

function Fila({datos}: FilaTypes){
    return (
    <tr>
        {datos.map((dato) => <td>{dato}</td>)}
    </tr>
    );
}

export default Fila;