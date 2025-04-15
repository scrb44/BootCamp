import './App.css'
import Tabla from './componentes/Tabla'

function App() {
  return (
    <>
      <Tabla columnas={
        ["Dinero", "Cantidad", "Total"]
      } filas={[
        {datos: [1,2,3]}, {datos: [2,3,4]}, {datos: [3,4,5]}
      ]}/>
    </>
  )
}

export default App
