import React, { useEffect, useState } from 'react';
import '../styles/sidebar.css';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import LabelIcon from '@mui/icons-material/Label';
import {data} from "./data";
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

interface labelData {
  id: string;
  name: string;
}

const SideBar = ({filterItem, open, item, setItem}:{filterItem:any,open: boolean,item:any, setItem:any}) => {
  // const [labels, setLabels] = useState([])
  // const labelFetch = async () => {
  //   const result = await fetch('http://localhost:8000/labelsget').then(async (res: any) => {
  //     // console.log(res.json());
  //     let resp = await res.json();
  //     return resp;
  //   }).then((res: any) => {
  //     setLabels(res);
  //     console.log(res)
  //     return res;
  //   })
  // }
  // useEffect(() => {
  //   // mails();
  //   labelFetch();
  // }, [])

  const labelss = [
    {
      id:1,
      name: "Codeforces",
      from: "noreply@codeforces.com",
      count: "14",
      color: "lightpink",
    },
    {
      id:2,
      name: "Coursera",
      from: "Coursera",
      count: "",
      color: "green",
    },
    {
      id:3,
      name: "LeetCode",
      from: "LeetCode",
      count: "20",
      color: "blue",
    },
    {
      id:4,
      name: "LinkedIn",
      from: "LinkedIn",
      count: "7",
      color: "red",
    },
    // {
    //   id:5,
    //   name: "Codeforces",
    //   from: "noreply@codeforces.com",
    //   count: "3",
    //   color: "purple",    
    // },
    // {
    //   id:6,
    //   name:  labelItems[1],
    //   count: "3",
    //   color: "purple",
    // },
  ]

  const [hover, setHover] = useState(false);


  return (
    <body>

        <main className="main">
      
            <div className={`left-bar ${open}`}>
              <button style={{border: "none"}}>
                <div id="compose" className="compose-item">
                  <EditOutlinedIcon className="icons" />
                  <span className="compose-hidden">Compose</span>
                </div>
              </button>
              <div className="features">
      
                <div className="feature-items" id="inbox"  onClick={()=>setItem(item)}>
                  <MailOutlinedIcon className="icons" />
                  <span className="hidden-feature">Inbox</span>
                  <span className="no-message">6969</span>
                </div>
      
                <div className="feature-items" id="starred">
                  <GradeOutlinedIcon className="icons" />
                  <span className="hidden-feature">Starred</span>
                </div>
      
                <div className="feature-items" id="snoozed">
                  <WatchLaterOutlinedIcon className='icons' />
                  <span className="hidden-feature">Snoozed</span>
                </div>
      
                <div className="feature-items" id="send">
                  <SendOutlinedIcon className='icons' />
                  <span className="hidden-feature">Sent</span>
                </div>
      
                <div className="feature-items" id="drafts">
                  <DescriptionOutlinedIcon className='icons' />
                  <span className="hidden-feature">Drafts</span>
                  <span className="no-message">69</span>
                </div>
      
                <div className="feature-items" id="more">
                  <ExpandMoreOutlinedIcon className='icons' />
                  <span className="hidden-feature">More</span>
                </div>
      
              </div>
              
              <div className="labels-heading">
                <span className="hidden-label">Label</span>
                <button style={{border: "none"}}>
                  <AddOutlinedIcon className="icons" />
                </button>
              </div>
              <div className='labelcontainer' >
                {labelss.map((label)=> {
                  return(
                    <div className='label-items' key={label.id} onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)} onClick={()=>filterItem(label.from)}>
                      <div className='label-icon'>
                      <LabelIcon className="labelicon" style={{color:`${label.color}`}}/>
                      </div>
                      <div className='label-name' style={{ display: open?"flex":"none"}}>
                        {label.name}
                      </div>
                      <div className='count-unread'style={{ display: open||hover?"flex":"none"}}>
                        {label.count}
                      </div>
                      {/* {hover? (
                      <div className='label-threedot'style={{ display: open?"flex":"none"}}>
                          <MoreVertOutlinedIcon className='label-threedot-icon'/>
                      </div>):""} */}
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </body>
  )
}

export default SideBar;
