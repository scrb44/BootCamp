import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (<>
    <h1>El contador tiene un valor de {count}</h1>
    <button onClick={() => setCount((count) => count + 1)}>Suma 1</button>
    <button onClick={() => setCount((count) => count - 1)}>Resta 1</button>
  </>);
}

export default App
