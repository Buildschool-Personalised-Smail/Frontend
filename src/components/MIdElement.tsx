import React, { useEffect, ReactNode, useState } from 'react'
import "../styles/midelement.css";
import { MdOutlineRefresh } from 'react-icons/md';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight, AiOutlineStar } from 'react-icons/ai';
import LabelIcon from '@mui/icons-material/Label';
import parseFrom1 from '../utils/parseFrom1';
import Content from './content';
import moment from "moment-timezone";

// interface threadData {
//   id: string;
//   from: string;
//   to: string;
//   reply_to: string;
//   date: string;
//   internal_date: string;
//   subject: string;
//   labels: [string];
//   snippet: string;
//   threadId: string;
//   body: string;
// }

const MidElement = ({threadsLists,setOpen,open,setContent, setFetcher}:{threadsLists:any, setOpen:any, setContent:any,open:any, setFetcher: React.Dispatch<React.SetStateAction<boolean>>}) => {
//   const [gmailsMails, setGmailMails] = useState([]);
//   const [threadsLists, setThreadLists] = useState<Array<Array<threadData>>>([]);
//   const mails = async () => {
//     const result = await fetch('http://localhost:8000/mailsget').then(async (res: any) => {
//       // console.log(res.json());
//       let resp = await res.json();
//       return resp;
//     }).then((res: any) => {
//       setGmailMails(Object.values(res));
//       console.log(res)
//       return res;
//     })
//   }
//   const threadsList = async () => {
//     const result = await fetch('http://localhost:8000/threadslist').then(async (res: any) => {
//       console.log(res);
//       let resp = await res.json();
//       return resp;
//     }).then((res: any) => {
//       setThreadLists(res);
//       console.log(res)
//       return res;
//     })
//   }
//   useEffect(() => {
//     // mails();
//     threadsList()
//   }, [])

// const [content,setContent] =useState([])
// const handleclick = (e:any,index:any)=>{
//   // e.setContent(threadsLists[e])
//   <Content open={setOpen} content={e[index]}/>
//   console.log(setOpen)
  // e.open((prev: boolean) => !prev)

// console.log(setOpen)

  return (
    <>
      <div className={`emaillist ${open}`}>
        {/* <!-- Settings Starts --> */}
        <div className="emailList_settings">

          <div className="emailList_settingsLeft">
            <input type="checkbox" />
            {/* <span className="material-icons"> redo</span>
          <span className="material-icons"> more_vert</span> */}
            <div className="emailListsettingsLeft_icon" onClick={()=> setFetcher(true)}>
              <span className="material-icons"> <MdOutlineRefresh /></span>
            </div>
            <div className="emailListsettingsLeft_icon">
              <span className="material-icons2"> <BiDotsVerticalRounded /></span>
            </div>
          </div>

          <div className="emailList_settingsRight">
            <div className="mailListsettingsRight_icon">
              <span className="text_in_top_1">
                <p>1-50 of 15,780</p>
              </span>
            </div>
            <div className="emailListsettingsRight_icon">
              <span className="material-icons3"> <AiOutlineLeft /></span>
            </div>
            <div className="emailListsettingsRight_icon">
              <span className="material-icons4"> <AiOutlineRight /></span>
            </div>
          </div>
        </div>

        <div className="emailList_list">
          {
            threadsLists.map((item:any, index:any) => {
              return (
                <div className="emailRow" key={index} onClick={()=>{setOpen(true),setContent(item[0])}}>
                  <div className="emailRow__options">
                    <input type="checkbox" />
                    <span className='objects1'><AiOutlineStar /></span>
                    {/* <span className='objects'><LabelIcon /></span> */}
                  </div>
                  <div className='objects'>{parseFrom1(item[item.length-1].from)}</div>

                  <div className="emailRow__message">
                    <span className="emailRow__description"><b>{item[item.length-1].subject}</b>-{item[item.length-1].snippet}</span>
                  </div>

                  <p className="emailRow__time">{item[item.length-1].date.split(',')[1].trim().slice(0,12)}</p>

                </div>
              )
            })
          }
        </div>
      </div>
    </>

  )
}


export default MidElement