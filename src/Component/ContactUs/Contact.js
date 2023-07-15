import React, { useState } from "react";
import "./Contact.css";
import contact from "../Assets/contact.png";
// import Onsubmit from "./Onsubmit";
// import { useState } from "react";
export default function Contact() {
  const [fullName,setFullName]=useState("");
  const [email,setemail]=useState("");
  const [message,setmessage]=useState("");
  return (
    <div className="contact-main" id="contact-component">
      <h1>
        Get In <span>Touch</span>
      </h1>
      <div className="contact-container">
        <div className="contact-image">
          <img src={contact} alt="" />
        </div>
        <div className="contact-form">
          <form action="https://formspree.io/f/mdororbq" method="POST" >
            <div className="form-container">
              <div className="section1 section-container">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  id="name"
                  value={fullName}
                  onChange={(e)=>setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="section2 section-container">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  id="email"
                  value={email}
                  onChange={(e)=>setemail(e.target.value)}
                  required
                />
              </div>
              <div className="section3 section-container">
                <label htmlFor="message">Message</label>
                <textarea
                  name="textarea"
                  placeholder="Write something...."
                  id="message"
                  value={message}
                  onChange={(e)=>setmessage(e.target.value)}
                  required
                />
              </div>
              <div className="contact-button">
                <button type="submit">Send Mail</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
