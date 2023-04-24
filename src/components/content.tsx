import React, {useState}from 'react';
import '../styles/content.css';
import sample from "../assets/sample.jpg";
import { MdChevronLeft,MdChevronRight,MdMoreVert,MdLabelOutline,MdDriveFileMove,MdAddTask
    ,MdSnooze,MdMarkAsUnread,MdDelete,MdArchive,MdArrowBack,MdPrint,MdStarBorder,MdReply,MdForward,MdOpenInNew } from "react-icons/md";
import parseFrom1 from '../utils/parseFrom1';
import parseFrom2 from '../utils/parseFrom2';


const Content = ({setOpen,open,content}:{ open:any,content:any, setOpen:any}) => {
    console.log(content)
    const rawHTML=content.body

return(
  <body> 
    <div className={`email ${open}`}>
        {/* <!-- Settings Starts --> */}
        <div className="emailtop__settings">
          <div className="emailtop__settingsLeft">
            <span className="material-icons" onClick={()=>setOpen(false)}> <MdArrowBack/> </span>
            <span className="material-icons"> <MdArchive/> </span>
            <span className="material-icons"> <MdDelete/> </span>
            <span className="material-icons"><MdMarkAsUnread/> </span>
            <span className="material-icons"> <MdSnooze/> </span>
            <span className="material-icons"> <MdAddTask/> </span>
            <span className="material-icons"> <MdDriveFileMove/> </span>
            <span className="material-icons"> <MdLabelOutline/> </span>
            <span className="material-icons"> <MdMoreVert/> </span>
          </div>
          <div className="emailtop__settingsRight">
            <span className="material-icons"> <MdChevronLeft/> </span>
            <span className="material-icons"> <MdChevronRight/> </span>
          </div>
        </div>

        <div className = "Email_body">
            <div className="Email_title">
                <div className ="title_left">
                    <h2>{content.subject}</h2>
                </div>
                <div className ="title_right">
                    <span className="material-icons"><MdPrint/></span>
                    <span className="material-icons"><MdOpenInNew/></span>
                </div>
            </div>

            <div id ="grid-container">
                <div className="email_content">
                    <div className='email-bar'>
                        <div className="email_id">
                        <div className="email_symbol">
                            <img className="avatar" src={sample} />
                        </div>
                        <div className="id_left">
                            <h3>
                                {parseFrom1(content.from)}
                            </h3>
                            <div>{parseFrom2(content.from)} </div>
                        </div>
                    </div> 
                        <div className="id_right">
                            <div>{content.date}</div>
                            <div className="material-icons"><MdStarBorder/></div>
                            <div className="material-icons"><MdReply/></div>
                            <div className="material-icons"><MdMoreVert/></div>
                        </div>
                    </div>

                    <div className ="core_email_content" dangerouslySetInnerHTML={{ __html: rawHTML }}>
                    </div>

                    <div className ="email_bottom_butts">
                        <button className="email_bottom_butts__reply"><span className="material-icons"><MdReply/></span>Reply</button>
                        <button className="email_bottom_butts__forward"><span className="material-icons"><MdForward/></span>Forward</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
  </body>
)
}
export default Content;