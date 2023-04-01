import React, { useEffect, useState } from 'react'
import "../styles/midelement.css";
import { MdOutlineRefresh } from 'react-icons/md';
import { BiDotsVerticalRounded } from 'react-icons/bi';
import { AiOutlineLeft } from 'react-icons/ai';
import { AiOutlineRight, AiOutlineStar } from 'react-icons/ai';
import LabelIcon from '@mui/icons-material/Label';
const MidElement = () => {
  const [gmailsMails, setGmailMails] = useState([]);
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
  useEffect(() => {
    mails();
  }, [])


  const data = [
    {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    },
    {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    },
    {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    }, {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    }, {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    }, {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    }, {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    }, {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    }, {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    }, {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    }, {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    }, {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    }, {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    }, {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    },
    {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    }, {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    }, {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    }, {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    }, {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    }, {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    }, {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    }, {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    }, {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    }, {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    }, {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    }, {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    }, {
      "icon": "star_border",
      "icons2": "star_border",
      "title": "youtube",
      "message": "on Your Channel Future Coders",
      "decription": "on Your Channel Future Coders"
    },
  ];

  return (
    <>
      <div className="emaillist">
        {/* <!-- Settings Starts --> */}
        <div className="emailList_settings">

          <div className="emailList_settingsLeft">
            <input type="checkbox" />
            {/* <span className="material-icons"> redo</span>
          <span className="material-icons"> more_vert</span> */}
            <div className="emailListsettingsLeft_icon">
              <span className="material-icons"> <MdOutlineRefresh /></span>
            </div>
            <div className="emailListsettingsLeft_icon">
              <span className="material-icons2"> <BiDotsVerticalRounded /></span>
            </div>
          </div>

          <div className="emailList_settingsRight">
            <div className="mailListsettingsRight_icon">
              <span className="text_in_top_1">
                <p>1-50 of 12,774</p>
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


        {/* <div className="emaillist_sections">
        <div className="section section__selected">
          <span className="material-icons"> inbox </span>
          <h4>Primary</h4>
        </div>

       
        <div className="section">
          <span className="material-icons"> people </span>
          <h4>Social</h4>
        </div>

   
        <div className="section">
          <span className="material-icons"> local_offer </span>
          <h4>Promotions</h4>
        </div>
    </div> */}
        {/* // Section Ends */}

        {/* // Email List Row Starts */}
        <div className="emailList_list">


          {/* <div className="emailList_settingsRight">
          <span className="material-icons"> chevron_left</span>
            
              
          
          <span className="material-icons"> chevron_left</span>
          <span className="material-icons"> keyboard_hide</span>
          <span className="material-icons"> settings</span>
        </div> */}

          {/* Email Row Starts */}

          {
            gmailsMails.map((item) => {
              return (
                <div className="emailRow">
                  <div className="emailRow__options">
                    <input type="checkbox" />
                    <span className='objects'><AiOutlineStar /></span>
                    <span className='objects'><LabelIcon /></span>
                  </div>
                  <div className='objects'>Youtube</div>

                  <div className="emailRow__message">
                    <span className="emailRow__description"> {item}</span>
                  </div>

                  <p className="emailRow__time">10pm</p>

                </div>
              )
            })
          }








          {/* Email Row Ends */}

        </div>
        {/* // Email List Row Ends */}
      </div>
    </>

  )
}


export default MidElement