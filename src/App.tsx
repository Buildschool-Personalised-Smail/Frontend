import React , { useState } from 'react'
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import MidElement from "../src/components/MIdElement";
import Compose from "./components/compose";
import './App.css'

function App() {
  const [open, setOpen] = useState(true);

  return (
    (
      <div className="container1">
        <Navbar setOpen={setOpen}/>
        <div className='container2'>
          <Sidebar open={open}/>
          <Compose/>
          <MidElement/>

        </div>

      </div>
    )
  )
}

export default App;
