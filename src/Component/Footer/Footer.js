import './Footer.css'
import React from 'react'
import { BiMailSend, BiCurrentLocation } from "react-icons/bi";
import { AiFillLinkedin, AiFillMail, AiFillInstagram, AiFillGithub, AiFillTwitterSquare } from "react-icons/ai";
import { HashLink as Link } from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom'
export default function Footer() {
    return (
        <BrowserRouter>
            <div className='footer-main'>
                {/* <hr /> */}
                <div className='footer-container'>
                    <div className="footer-section1">
                        <h1>Jatin Kumar</h1>
                        <p>Thank you for visiting my personal <br />
                            portfolio website. Connect with me over <br />
                            socials.</p>
                        <p style={{ marginTop: "30px" }}>Keep Rising 🚀</p>
                    </div>
                    <div className="footer-section2">
                        <h1>Quick Links</h1>
                        <ul>
                            <li><Link smooth to="#home-component">Home</Link></li>
                            <li><Link smooth to="#about-component">About</Link></li>
                            <li><Link smooth to="#skill-component">Skills</Link></li>
                            <li><Link smooth to="#project-component">Projects</Link></li>
                            <li><Link smooth to="#contact-component">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section3">
                        <h1>Contact Info</h1>
                        {/* <p>
                            <span><BiPhoneCall /> </span>
                            <span><a href="/"> +91 6376657502</a></span>
                        </p> */}
                        <p>
                            <span><BiMailSend /> </span>
                            <span><a href="/"> 63.jatin@gmail.com</a></span>
                        </p>
                        <p>
                            <span><BiCurrentLocation /></span>
                            <span><a href="/"> Indore,MadhyaPradesh,India</a></span>
                        </p>
                        <div className='social-media'>
                            <span><a href="https://www.linkedin.com/in/jatinkumar63/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="icon-style" /></a></span>
                            <span><a href="https://github.com/Jatin-Kumar-Thakur" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a></span>
                            <span><a href="https://www.instagram.com/jatinthakur807/" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a></span>
                            <span><a href="mailto: 63.jatin@gmail.com" target="_blank" rel="noopener noreferrer"><AiFillMail /></a></span>
                            <span><a href="https://twitter.com/JatinTh84357223" target="_blank" rel="noopener noreferrer"><AiFillTwitterSquare /></a></span>
                        </div>
                    </div>
                </div>
                <div className="footer-foot">
                    <p>Desined and Developed By <span>Jatin Kumar</span></p>
                </div>
            </div>
        </BrowserRouter>
    )
}
