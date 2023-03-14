import React , { useState } from 'react'
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import MidElement from "../src/components/MIdElement";
import './App.css'

function App() {
  return (
    (
      <div className="App">
        <MidElement/>
        <Sidebar/>
        <Navbar/>
      </div>
    )
  )
}

export default App;
