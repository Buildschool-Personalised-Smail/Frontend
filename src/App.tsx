import React , { useState, useEffect } from 'react'
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import MidElement from "../src/components/MIdElement";
import Compose from "./components/compose";
import './App.css'
// import parseFrom2 from './utils/parseFrom2';
import Content from './components/content';
import parseFrom1 from './utils/parseFrom1';

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
  const [showcontent, setShowcontent] = useState(false);
  const [content,setContent] =useState([])

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
const filterThread = (curr: any) => {
  const newThread = threadsLists.filter((newThread:any) => {
     return parseFrom1(newThread[0].from).includes(curr);
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
          <Compose/>
          <MidElement setOpen={setShowcontent} open={showcontent} threadsLists={item} setContent={setContent}/>
          <Content setOpen={setShowcontent} open={showcontent} content={content}/>
        </div>

      </div>
    )
  )
}

export default App;
