import React from 'react';
import '../styles/sidebar.css';

const SideBar = () => {

    return(
<body>

        <main className="main">
      
            <div className="left-bar">
              <button style={{border: "none"}}>
                <div id="compose" className="compose-item">
                  <span className="material-icons-outlined"> edit </span>
                  <span className="compose-hidden">Compose</span>
                </div>
              </button>
              <div className="features">
      
                <div className="feature-items" id="inbox">
                  <span className="material-icons"> inbox </span>
                  <span className="hidden-feature"><strong>Inbox</strong></span>
                  <span className="no-message">6969</span>
                </div>
      
                <div className="feature-items" id="starred">
                  <span className="material-icons-outlined"> grade </span>
                  <span className="hidden-feature">Starred</span>
                </div>
      
                <div className="feature-items" id="snoozed">
                  <span className="material-icons-outlined"> watch_later </span>
                  <span className="hidden-feature">Snoozed</span>
                </div>
      
                <div className="feature-items" id="send">
                  <span className="material-icons-outlined"> send </span>
                  <span className="hidden-feature">Sent</span>
                </div>
      
                <div className="feature-items" id="drafts">
                  <span className="material-icons-outlined"> description </span>
                  <span className="hidden-feature"><strong>Drafts</strong></span>
                  <span className="no-message">69</span>
                </div>
      
                <div className="feature-items" id="more">
                  <span className="material-icons-outlined"> expand_more </span>
                  <span className="hidden-feature">More</span>
                </div>
      
              </div>
      
              <div className="labels">
                <span className="hidden-label">Label</span>
                <button style={{border: "none"}} className="material-icons-outlined"> add </button>
              </div>
            </div>
        </main>
    </body>
    )
}

export default SideBar;
