import React, {useState} from 'react';
import '../styles/new_label.css';

const Label= () => {
    function close(){
        var x = document.getElementById("input_label");
        x!.style.display = "none";
    }
    return(
        <div className = "input_label" id="input_label" style = {{display: "none"}}>
            <form className="input_form">
            <label>Label Name: <button className="close" onClick={close}>x</button></label><input type="text" name="label name"/>
            <br/>
            <label>Subject: </label><input type="text" name="subject"/>
            <br/>
            <label>Sender Email: </label><input type="text" name="sender"/>
            </form>
            <button className="submit_label_input">Create Label</button>
        </div>
    )
    
}

export default Label;