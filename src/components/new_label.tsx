import React, {useState} from 'react';
import '../styles/new_label.css';
import labelss from './labels';

const Label= () => {
    function close(){
        var x = document.getElementById("input_label");
        x!.style.display = "none";
    }
    const[state,setState]=useState({...labelss})
    const saveName = (e:any) => {
      const name=e.target.value;
      setState((e1:any)=>e1.name=name);
    };
    const saveMail = (e:any) => {
      const mail=e.target.value;
      setState((e1:any)=>e1.from=mail);
    };
    const saveColour = (e:any) => {
      const colour=e.target.value;
      setState((e1:any)=>e1.color=colour);
    };
    const addNewItem = (e:any) => {
      const copy = [...labelss];
      copy.push(state);
      e.setState(copy);
      e.setName("");
      e.setColour("");
      e.setMail("");
    };
    console.log(labelss);
    console.log(state);
    return(
        <div className = "input_label" id="input_label" style = {{display: "none"}}>
            <form className="input_form">
            <label>Label Name: <button className="close" onClick={close}>x</button></label><input type="text" name="label name" onChange={saveName}/>
            <br/>
            <label>Sender Email: </label><input type="text" name="sender" onChange={saveMail}/>
            </form>
            <label>Label Colour: </label><input type="text" name="colour" onChange={saveColour}/>
            <br/>
            <button className="submit_label_input" onClick={addNewItem}>Create Label</button>
        </div>
    )
    
  }

export default Label;