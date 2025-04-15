import './App.css'
import Galeria from './componentes/Galeria'

function App() {
  return (
    <>
      <Galeria imagenes={[
        {alt:"Ditto", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"},
        {alt:"Bulbasaur", src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}
      ]}/>
    </>
  )
}

export default App
