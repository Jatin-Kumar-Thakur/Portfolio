import React from "react";
import "./Contact.css";
import contact from '../Assets/contact.png'
export default function Contact() {
  return (
    <div className="contact-main" id="contact-component">
          <h1>Get In <span>Touch</span></h1>
      <div className="contact-container">
        <div className="contact-image">
          <img src={contact} alt="" />
        </div>
        <div className="contact-form">
          <form action="https://formsubmit.co/63.jatin@gmail.com" method="POST">
            <div className="form-container">
              <div className="section1 section-container">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Enter Name" id="name" required/>
              </div>
              <div className="section2 section-container">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Enter Email" id="emial" required/>
              </div>
              <div className="section3 section-container">
                <label htmlFor="message">Message</label>
                <textarea name="msg" placeholder="Write something...." id="message" />
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
