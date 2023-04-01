import React, {ReactNode, useState} from 'react'
import "../styles/midelement.css";
import { MdOutlineRefresh} from 'react-icons/md';
import { BiDotsVerticalRounded} from 'react-icons/bi';
import { AiOutlineLeft} from 'react-icons/ai';
import { AiOutlineRight} from 'react-icons/ai';

const MidElement = ({item}:{item:any}) => {
   
// const [item, setItem] = useState(data);
// const labelItems = [...new Set(data.map((Val) => Val.category))];

// const filterItem = ({curlabel}:{curlabel: any}) => {
//   const newItem = data.filter((newVal) => {
//     return newVal.category === curlabel;
//   });
//   setItem(newItem);
// };


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
              <span className="material-icons"> <MdOutlineRefresh/></span>
            </div>
            <div className="emailListsettingsLeft_icon">
              <span className="material-icons2"> <BiDotsVerticalRounded/></span>
            </div>
        </div>

        <div className="emailList_settingsRight">
          <div className="mailListsettingsRight_icon">
              <span className="text_in_top_1">
                <p>1-50 of 12,774</p>
              </span>
          </div>
          <div className="emailListsettingsRight_icon">
            <span className="material-icons3"> <AiOutlineLeft/></span>
          </div>
          <div className="emailListsettingsRight_icon">
            <span className="material-icons4"> <AiOutlineRight/></span>
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
        item.map((e: {
          decription: ReactNode; icon: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; icons2: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; message: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; "": { decription: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }; 
})=>{
          return(
            <div className="emailRow">
            <div className="emailRow__options">
              <input type = "checkbox" />
              <span className= "material-icons"> {e.icon}</span>
              <span className = "material-icons"> {e.icons2}</span>
            </div>
            <h3 className ="emailRow_title">{e.title}</h3>
      
            <div className="emailRow__message">
              <h4>
                {e.message} <span className="emailRow__description"> {e.decription}</span>
                </h4>
            </div>
      
            <p className ="emailRow__time">10pm</p>
      
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