import React , { useState, useEffect } from 'react'
import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import MidElement from "./components/MIdElement";
import Compose from "./components/compose";
import Label from "./components/new_label";
import axios from "axios";

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
  internalDate: string;
  subject: string;
  labelsList: [string];
  snippet: string;
  threadId: string;
  body: string;
}


function Profile() {
  const [open, setOpen] = useState(true);
  const [loading, setLoading]= useState<Boolean>(true);
  const [showcontent, setShowcontent] = useState(false);
  const [content,setContent] =useState([])
  const [fetcher, setFetcher]= useState(true);
    const [threadsLists, setThreadLists] = useState<Array<Array<threadData>>>([]);
    // const mails = async () => {
    //   const result = await fetch('http://localhost:8000/mailsget').then(async (res: any) => {
    //     // console.log(res.json());
    //     let resp = await res.json();
    //     return resp;
    //   }).then((res: any) => {
    //     setGmailMails(Object.values(res));
    //     console.log(res)
    //     return res;
    //   })
    // }
    const threadsList = async () => {
      try {
        const url= "http://localhost:8000/profile/threadslist";
        const { data }= await axios.get(url, { withCredentials: true });
        setThreadLists(data.threads);
        setItem(data.threads)
        setLoading(!loading);
        // console.log(data.threads);
      }
      catch(e) {
        console.error(e);
      }
    }
    
    useEffect(() => {
      // mails();
      if (fetcher) {
        threadsList();
        setFetcher(false);
      }
    }, [fetcher])

const [item, setItem] = useState(threadsLists);
const filterThread = (curr: any) => {
  const newThread = threadsLists.filter((newThread:any) => {
     return parseFrom1(newThread[newThread.length -1].from).includes(curr);
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
          { fetcher ? <p>Loading</p> : (<MidElement setOpen={setShowcontent} open={showcontent} threadsLists={item} setContent={setContent} setFetcher={setFetcher} />)}
          <Content setOpen={setShowcontent} open={showcontent} content={content}/>
          <Label/>
        </div>

      </div>
    )
  )
}

export default Profile;
