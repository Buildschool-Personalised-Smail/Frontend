import React , { useState } from 'react'
import Sidebar from "./components/sidebar";

import MidElement from "../src/components/MIdElement";
import './App.css'

function App() {
  return (
    (
      <div className="App">
        <MidElement/>
        <Sidebar/>
      </div>
    )
  )
}

export default App;