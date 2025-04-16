import './App.css'
import TextoFormateado from './componentes/TextoFormateado'

function App() {
  return (
    <>
      <TextoFormateado texto='Hablando'/>
      <TextoFormateado texto='Gritando' negrita={true}/>
      <TextoFormateado texto='Sugiriendo' cursiva={true}/>
      <TextoFormateado texto='Gritando y surgiriendo' negrita={true} cursiva={true}/>
    </>
  )
}

export default App
