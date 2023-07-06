import './AboutMe.css'
import image from '../Assets/Asset_2.png'
import React from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos';
import { useEffect } from "react";
export default function AboutMe() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className='main-container' id='about-component'>
      <h1>About <span>Me</span></h1>
      <div className="about-container">
        <div className="about-section1 about-image">
          <img src={image} alt="side" />

        </div>
        <div className="about-section2">
          <h1 data-aos="fade-up">Hi, <span>I'm Jatin Kumar</span>.</h1>
          <h3>Web Developer !</h3>
          <p data-aos="fade-up">Hello, everyone! My name is Jatin Kumar, 
            and I am a highly motivated final year Computer 
            Science and Engineering student at Medi-caps 
            University. I have a strong passion for web 
            development and a drive to excel in this field.
          </p>

          <p data-aos="fade-up">Over the course of my studies, I have gained 
            valuable experience in various programming languages 
            such as HTML, CSS, and JavaScript. I have worked on 
            several basic projects related to front-end web 
            development, which have helped me hone my skills 
            and develop a solid foundation in this area.
          </p>

          <p data-aos="fade-up">In addition to my proficiency in web technologies, 
            I also have a good command of C++ and ReactJS. 
            C++ has enabled me to dive into system-level 
            programming and build efficient software solutions, 
            while ReactJS has empowered me to create dynamic and 
            interactive user interfaces for web applications.
          </p>

          <p data-aos="fade-up">Thank you for considering my introduction, 
            and I look forward to connecting with you all!
          </p>
        </div>
      </div>
    </div>
  )
}
