import React, {useState}from 'react';
import '../styles/content.css';
import sample from "../assets/sample.jpg";
import { MdChevronLeft,MdChevronRight,MdMoreVert,MdLabelOutline,MdDriveFileMove,MdAddTask
    ,MdSnooze,MdMarkAsUnread,MdDelete,MdArchive,MdArrowBack,MdPrint,MdStarBorder,MdReply,MdForward,MdOpenInNew } from "react-icons/md";
import parseFrom from '../utils/parseFrom';

const Content = ({setOpen,open,content}:{ open:any,content:any, setOpen:any}) => {
    console.log(content)
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

            <div className ="grid-container">
                <div className="email_symbol">
                    <img className="avatar" src={sample} />
                </div>
                <div className="email_content">
                    <div className="email_id">
                        <div className="id_left">
                            <h3>
                                Secretary,Ches IITM
                            </h3>
                            <div>sec_ches@smail.iitm.ac.in </div>
                        </div>
                        <div className="id_right">
                            <div>7:05 PM(1 hour ago)</div>
                            <div className="material-icons"><MdStarBorder/></div>
                            <div className="material-icons"><MdReply/></div>
                            <div className="material-icons"><MdMoreVert/></div>
                        </div>
                    </div> 

                    <div className ="core_email_content">
                        <h4>
                            Hello Everyone,I have been receiving DMs about the same on Whatsapp and I am replying to it over here. I know things have been a little delayed and I had thought of conducting the events in the month of April and but every weekend came with a bunch of holidays and therefore couldn't do it. Therefore I have spoken to the next academic year's aspiring secretary and instructed him that these events getting conducted is supposed to be his first priority as of now.
                            I have also explained to him how these events are supposed to happen and what all things are needed to be taken care of. The next Secretary is going to be from the 2020 batch and I am asking you people to have faith in the next secretary as he has clear instructions of the events. 
                            As for the money, it doesn't go into my pocket or anyone's. It will pass down to the next secretary and will be utilised by him in the events happening then. 

                            Also I am aware that there are placements coming up for the 2020 batch and since they have to prepare for it. Don't worry about it as you guys will also be given preference about the same and if it's not feasible we will conduct it in the even semester. Therefore to summarise all I am asking for is to have faith in your batchmate (2020 batch) as he has clear instructions and from the first day of the next semester he will know that these events need to be conducted and since we will be having more number of people participating in the events we can move on with this.
                            Also be clear of one thing that the money you have given will be spent on the events and the merchandise ONLY and nowhere else. 
                            Also I would like to apologise to everyone about this situation which is created. It's a mistake from our side and I am aware of it but don't worry, we have learned a lesson from this situation and will do better in the coming years. 
                        </h4>
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