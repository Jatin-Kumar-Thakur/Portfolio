import React from 'react'
import './Header.css'
import logo from '../Assets/Logojatin.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom'

export default function NavBar() {
    let [toggle, setToggle] = useState(false);
    function toggleNav() {
        setToggle(!toggle);
    }
    return (
        <BrowserRouter>
            <div className="header-container">
                <div className="header-logo">
                    <a href="/"><img src={logo} alt="Jatin" /></a>
                    <div className="menu-bar">
                        <GiHamburgerMenu onClick={toggleNav} />
                    </div>
                </div>
                <div className={toggle ? "header-nav nav-mobile" : "header-nav"}>
                    <div className='nav-items'>
                        <Link smooth to="#home-component"><span>Home</span></Link>
                        <Link smooth to="#about-component"><span>About</span></Link>
                        <Link smooth to="#skill-component"><span>Skills</span></Link>
                        <Link smooth to="#project-component"><span>Projects</span></Link>
                        <Link smooth to="#contact-component"><span>Contact</span></Link>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
};
