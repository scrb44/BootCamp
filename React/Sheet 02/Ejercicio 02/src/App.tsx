import { ChangeEvent, useState } from 'react'
import './App.css'

function App() {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [contrasenia, setContrasenia] = useState("")

  return (
    <>
      <form action="#">
        <label htmlFor="nombre">Nombre</label>
        <input 
          type="text" 
          name="nombre" 
          id='nombre' 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNombre(e.currentTarget.value)} 
          value={nombre} 
        />
        <br />
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          name="email" 
          id='email' 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)} 
          value={email}
        />
        <br />
        <label htmlFor="contrasenia">Contraseña</label>
        <input 
          type="password" 
          name="contrasenia" 
          id='contrasenia' 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContrasenia(e.currentTarget.value)} 
          value={contrasenia}
        />

      </form>

      <p>Nombre: {nombre}</p>
      <p>Email: {email}</p>
      <p>Contraseña: {contrasenia}</p>
    </>
  )
}

export default App
