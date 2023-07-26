// import { useState } from 'react';
import TypeWriter from "typewriter-effect"
import './Home.css';
import logo from '../Assets/Asset_2.gif';
import React from 'react'
import { AiFillLinkedin, AiFillMail, AiFillInstagram, AiFillGithub, AiFillTwitterSquare } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom'

export default function Home() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <BrowserRouter>
            <div className='home-main' id="home-component">
                <div className="home-container">
                    <div className='home-text' data-aos="fade-left">
                        <h1 data-aos="zoom-in">Hi There,</h1>
                        <h1 >I'm Jatin Kumar</h1>
                        <h3><TypeWriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                strings: [
                                    "I am a React Developer.",
                                    "I am a front-end Developer.",
                                    "I am a C++ Programmer."
                                ],
                            }}
                        />
                        </h3>
                        <br />
                        <span className='button'>
                            <button><Link smooth to="#about-component">Know More </Link> </button> <span>  </span>
                            <button><a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1soPvAHQr9NWxPhUkkTS6BhetjPkYQkw7/view?usp=drive_link">Resume (CV)</a> </button>
                        </span>
                        <div className='social-media'>
                            <span><a href="https://www.linkedin.com/in/jatinkumar63/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="icon-style" /></a></span>
                            <span><a href="https://github.com/Jatin-Kumar-Thakur" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a></span>
                            <span><a href="https://www.instagram.com/jatinthakur807/" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a></span>
                            <span><a href="mailto: 63.jatin@gmail.com" target="_blank" rel="noopener noreferrer"><AiFillMail /></a></span>
                            <span><a href="https://twitter.com/JatinTh84357223" target="_blank" rel="noopener noreferrer"><AiFillTwitterSquare /></a></span>
                        </div>
                    </div>
                    <div className='home-image'>
                        <div className="image">
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}
