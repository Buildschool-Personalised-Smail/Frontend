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
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Compose from "./compose";
import '../App.css';
import '../styles/new_label.css';
import labelss from './labels';
import axios from "axios";

import Label from "./new_label";

interface LabelType {
  id: string;
  name: string;
  messageListVisibility: string;
  labelListVisibility: string;
  type: string;
  messagesTotal: number;
  messagesUnread: number;
  threadsTotal: number;
  threadsUnread: number;
}
const SideBar = ({filterItem, open, item, setItem}:{filterItem:any,open: boolean,item:any, setItem:any}) => {
  const [hover, setHover] = useState(false);
  const [labels, setLabels]= useState<Array<LabelType>>([]);
  const [loading, setLoading]= useState(true);
  const labelsList = async () => {
      try {
        const url= "http://localhost:8000/profile/labelsget";
        const { data: data2 }= await axios.get(url, { withCredentials: true });
        // setThreadList(data.threads);
        setLabels(data2);
        setLoading(!loading);
        // console.log(data);
      }
      catch(e) {
        console.error(e);
      }
    }
    
    useEffect(() => {
      // mails();
      labelsList();
    }, [])
// console.log(labels)
function composebox(){
  // e.preventDefault();
  var x = document.getElementById("compose_box");
  x!.style.display = "block";
}

function add_label(){
  var x = document.getElementById("input_label");
  // x!.style.display = "block";
  if (x!.style.display === "none"){
    x!.style.display = "block";
  }
  else{
    x!.style.display = "none";
  }
}
if (loading) {
  return <p>Loading...</p>
}

  return (

    <body>

      <main className="main">

        <div className={`left-bar ${open}`}>
          <button className="compose_button" style={{ border: "none" }} onClick={composebox}>
            <div id="compose" className="compose-item">
              <EditOutlinedIcon className="icons"/>
              <span className="compose-hidden">Compose</span>
            </div>
          </button>
          <div className="features">

            <div className="feature-items" id="inbox" onClick={()=>setItem(item)}>
              <MailOutlinedIcon className="icons" />
              <span className="hidden-feature">Inbox</span>
              <span className="no-message">{labels[2].messagesTotal}</span>
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
              <span className="no-message">{labels[5].messagesTotal}</span>
            </div>

            <div className="feature-items" id="more">
              <ExpandMoreOutlinedIcon className='icons' />
              <span className="hidden-feature">More</span>
            </div>

          </div>

          <div className="labels-heading">
            <span className="hidden-label">Label</span>
            <button style={{ border: "none" }} onClick = {add_label}>
              <AddOutlinedIcon className="icons" />
            </button>

            

          </div>
          <div className='labelcontainer' >
            {labels.map((label) => {
              if (label.type==="user")
              return (
                <div className='label-items' key={label.id} onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)} onClick={()=>filterItem(label.name)}>
                <div className='label-icon'>
                <LabelIcon className="labelicon" style={{color: "grey"}}/>
                </div>
                <div className='label-name' style={{ display: open?"flex":"none"}}>
                  {label.name}
                </div>
                <div className='count-unread'style={{ display: open||hover?"flex":"none"}}>
                  {label.messagesTotal}
                </div>
                  {/* {hover? (
                      <div className='label-threedot'style={{ display: open?"flex":"none"}}>
                          <MoreVertOutlinedIcon className='label-threedot-icon'/>
                      </div>):""} */}
                </div>
              )
              else {
                return null;
              }
            })}
          </div>
        </div>
      </main>
    </body>
  )
}

export default SideBar;
