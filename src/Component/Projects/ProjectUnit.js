import React from 'react'
import './ProjectUnit.css'
import 'aos/dist/aos.css'
import AOS from 'aos';
import { useEffect } from "react";
import ima from '../Assets/Asset_4.jpg'
import translator from '../Assets/Asset_5.jpg'
import bookstore from '../Assets/Asset_6.jpg'


export default function ProjectUnit() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    const data=[
        {
            id:1,
            name:"Personal Portfolio",
            description:" I have designed and developed a responsive personal portfolio interface using React, HTML, and CSS. This portfolio serves as a visually engaging and user-friendly platform to showcase my skills, experiences, and projects to visitors from different devices and screen sizes.",
            tech:"ReactJs HTML CSS",
            link1:"https://github.com/Jatin-Kumar-Thakur/portfolio",
            link2:"https://jatin-kumar-thakur.github.io/portfolio/",
            image:ima,
            val:0,
            fade1:"fade-right",
            fade2:"fade-left"
        },
        {
            id:2,
            name:"Book Store",
            description:"Designed and developed an interactive interface for anonline bookstore using HTML, CSS.\nImplemented features such as a Books categories ,shopping cart, and user login system. \nUtilized responsive design techniques to ensure the interface is optimized for viewing on desktop and mobile devices",
            tech:"HTML CSS",
            link1:"https://github.com/Jatin-Kumar-Thakur/Book_store",
            link2:"https://jatin-kumar-thakur.github.io/Book_store/",
            image:bookstore,
            val:1,
            fade2:"fade-right",
            fade1:"fade-left"
        },
        {
            id:3,
            name:"Language Translator",
            description:"Designed and developed a language translator Web application using HTML, CSS, JavaScript and Translation API.\n The application provides translation between multiple languages and includes features like text-to-speech conversion",
            tech:"HTML CSS JavaScript",
            link1:"https://github.com/Jatin-Kumar-Thakur/Translator",
            link2:"https://jatin-kumar-thakur.github.io/Translator/",
            image:translator,
            val:0,
            fade1:"fade-right",
            fade2:"fade-left"       
        },
    ]
    return (
        <div className='project-main' id='project-component'>
            <h1>Projects</h1>
            {
                data.map((prop)=>
                <div className={prop.val ? "project-container " : "project-container reverse"}>
                    <div className="project-section project-section1" data-aos="fade-left">
                        <h2>{prop.name}</h2>
                        <p>{prop.description}</p>
                        <p id='project-tech'>{prop.tech}</p>
                        <div className="links">
                            <a href={prop.link1} target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href={prop.link2} target="_blank" rel="noopener noreferrer">View Website</a>
                        </div>
                    </div>
                    <div className="project-bar project-section2">
                        <div className="bar-icon"></div>
                    </div>
                    <div className="project-section project-section3" data-aos="fade-right">
                        <a href={prop.link2} target="_blank" rel="noopener noreferrer">
                            <img src={prop.image} alt="Project_img" />
                        </a>
                    </div>
                </div>
            )
            }
        </div>
    )
}
