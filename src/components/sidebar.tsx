import React from 'react';
import '../styles/sidebar.css';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const SideBar = () => {

    return(
<body>

        <main className="main">
      
            <div className="left-bar">
              <button style={{border: "none"}}>
                <div id="compose" className="compose-item">
                  <EditOutlinedIcon className="icons" />
                  <span className="compose-hidden">Compose</span>
                </div>
              </button>
              <div className="features">
      
                <div className="feature-items" id="inbox">
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
      
              <div className="labels">
                <span className="hidden-label">Label</span>
                <button style={{border: "none"}}>
                  <AddOutlinedIcon className="icons" />
                </button>
              </div>
            </div>
        </main>
    </body>
    )
}

export default SideBar;
