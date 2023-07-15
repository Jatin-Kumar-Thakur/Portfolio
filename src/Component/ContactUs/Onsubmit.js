import React from 'react'
import './Contact.css';
import { useState } from 'react';
export default function Onsubmit() {
    let [val,setval]=useState(0);
    function hideBtn(){
        setval(1);
    }
  return (
    <div className={val?"submit-main" : "submit-main submit-main-show"}>
      <div className="submit-container">
        <div className="submit-popup">
            <p>Your Response is submit Sucessfully</p>
            <button onClick={hideBtn}>OK</button>
        </div>
        <div className="popup-btn">
        </div>
      </div>
    </div>
  )
}
