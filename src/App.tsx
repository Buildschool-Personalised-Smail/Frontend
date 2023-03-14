import React , { useState } from 'react'
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import MidElement from "../src/components/MIdElement";
import './App.css'

function App() {
  return (
    (
      <div className="container1">
        <Navbar/>
        <div className='container2'>
          <Sidebar/>
          <MidElement/>
        </div>
      </div>
    )
  )
}

export default App;
