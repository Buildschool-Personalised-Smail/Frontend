import  React , { useState } from 'react';
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

const SideBar = ({filterItem, open, labelItems, setItem}:{filterItem:any,open: boolean,labelItems:any, setItem:any}) => {

  const labels = [
    {
      id:1,
      name: labelItems[0],
      count: "14",
      color: "lightpink",
    },
    {
      id:2,
      name: labelItems[1],
      count: "",
      color: "green",
    },
    {
      id:3,
      name: labelItems[2],
      count: "20",
      color: "blue",
    },
    {
      id:4,
      name:  labelItems[3],
      count: "7",
      color: "red",
    },
    {
      id:5,
      name:  labelItems[4],
      count: "3",
      color: "purple",    
    },
    // {
    //   id:6,
    //   name:  labelItems[1],
    //   count: "3",
    //   color: "purple",
    // },
  ]

  const [hover, setHover] = useState(false);


    return(
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
      
                <div className="feature-items" id="inbox"  onClick={()=>setItem(data)}>
                  <MailOutlinedIcon className="icons" />
                  <span className="hidden-feature"><strong>Inbox</strong></span>
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
                  <span className="hidden-feature"><strong>Drafts</strong></span>
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
                {labels.map((label)=> {
                  return(
                    <div className='label-items' key={label.id} onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)} onClick={()=>filterItem(label.name)}>
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
                    )})}
              </div>
            </div>
        </main>
    </body>
    )
}

export default SideBar;
