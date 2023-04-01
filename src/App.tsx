import React , { useState } from 'react'
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import MidElement from "../src/components/MIdElement";
import {data} from "../src/components/data";
import './App.css'

function App() {
  const [open, setOpen] = useState(true);

  const [item, setItem] = useState(data);

  const labelItems = [...new Set(data.map((Val) => Val.category))];

  const filterItem = (curr: any) => {
    const newItem = data.filter((newVal) => {
      return newVal.category === curr;
    });
    setItem(newItem);
  };




  return (
    (
      <div className="container1">
        <Navbar setOpen={setOpen}/>
        <div className='container2'>
          <Sidebar open={open} labelItems={labelItems} filterItem={filterItem} setItem={setItem}/>
          <MidElement item={item}/>
        </div>
      </div>
    )
  )
}

export default App;
