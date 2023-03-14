import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import MidElement from "../src/components/MIdElement"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MidElement/>
    </div>
  )
}

export default App
