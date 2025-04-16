import './App.css'
import TarjetaPrincipal from './componentes/TarjetaPrincipal'

function App() {

  return (
    <>
      <TarjetaPrincipal titulo='Pelicula' subtitulo='Nombre'>
        <TarjetaPrincipal titulo='Pelicula 2' subtitulo='Nombre 2'>  
        </TarjetaPrincipal>
      </TarjetaPrincipal>
    </>
  )
}

export default App
