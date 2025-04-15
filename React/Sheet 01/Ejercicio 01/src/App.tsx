import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tarjeta from './Tarjeta'
import ListaDeTarjetas from './ListaDeTarjetas'

function App() {
  return (
    <>
      <Tarjeta nombre='nombre' apellido='apellido' ocupacion='ocupacion' imagenUrl='https://ethic.es/wp-content/uploads/2023/03/imagen-1280x768.jpg'/>
      <ListaDeTarjetas nombre='nombre' apellido='apellido' ocupacion='ocupacion' imagenUrl='https://ethic.es/wp-content/uploads/2023/03/imagen-1280x768.jpg'/>
    </>
  )
}

export default App
