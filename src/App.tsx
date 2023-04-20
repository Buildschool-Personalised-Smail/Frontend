import React , { useState, useEffect } from 'react'
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import MidElement from "../src/components/MIdElement";
import {data} from "../src/components/data";
import './App.css'
import parseFrom from './utils/parseFrom';

interface threadData {
  id: string;
  from: string;
  to: string;
  reply_to: string;
  date: string;
  internal_date: string;
  subject: string;
  labels: [string];
  snippet: string;
  threadId: string;
  body: string;
}


function App() {
  const [open, setOpen] = useState(true);

  // const [item, setItem] = useState(data);

  // const labelItems = [...new Set(data.map((e) => e.category))];

  // const filterItem = (curr: any) => {
  //   const newItem = data.filter((newItem) => {
  //     return newItem.category === curr;
  //   });
  //   setItem(newItem);
  // };

 
    const [gmailsMails, setGmailMails] = useState([]);
    const [threadsLists, setThreadLists] = useState<Array<Array<threadData>>>([]);
    const mails = async () => {
      const result = await fetch('http://localhost:8000/mailsget').then(async (res: any) => {
        // console.log(res.json());
        let resp = await res.json();
        return resp;
      }).then((res: any) => {
        setGmailMails(Object.values(res));
        console.log(res)
        return res;
      })
    }
    const threadsList = async () => {
      const result = await fetch('http://localhost:8000/threadslist').then(async (res: any) => {
        console.log(res);
        let resp = await res.json();
        return resp;
      }).then((res: any) => {
        setThreadLists(res);
        console.log(res)
        return res;
      })
    }
    
    useEffect(() => {
      // mails();
      threadsList()
    }, [])
  
const [item, setItem] = useState(threadsLists);
// const fromAddress = [...new Set(threadsLists.map((e:any) => e.from))];
const filterThread = (curr: any) => {
  const newThread = threadsLists.filter((newThread:any) => {
     return parseFrom(newThread[0].from).includes(curr);
  });
  console.log(newThread);
  setItem(newThread);
};

  return (
    (
      <div className="container1">
        <Navbar setOpen={setOpen}/>
        <div className='container2'>
          <Sidebar open={open} item={threadsLists} filterItem={filterThread} setItem={setItem}/>
          <MidElement threadsLists={item}/>
        </div>
      </div>
    )
  )
}

export default App;
