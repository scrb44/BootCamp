import './App.css'
import Menu from './componentes/Menu'

function App() {

  return (
    <>
      <Menu enlaces={
        [
          {texto: "Hola 1", url: "https:www.google.es"},
          {texto: "Hola 2", url: "https:www.google.es"},
          {texto: "Hola 3", url: "https:www.google.es"},
          {texto: "Hola 4", url: "https:www.google.es"}
        ]}/>
    </>
  )
}

export default App
