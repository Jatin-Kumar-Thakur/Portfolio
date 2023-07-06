import './Skills.css';
import React from 'react'

import 'aos/dist/aos.css'
import AOS from 'aos';
import { useEffect } from "react";


//images
import html from '../Assets/html.png'
import css from '../Assets/css.png'
import js from '../Assets/js.png'
import c from '../Assets/c.png'
import cpp from '../Assets/c++.png'
import bootstrap from '../Assets/bootstrap.png'
import react from '../Assets/react.png'
import redux from '../Assets/redux.png'
import npm from '../Assets/npm.png'
import git from '../Assets/git.png'
import github from '../Assets/github.png'
import vscode from '../Assets/vs.png'
export default function Skills() {
    useEffect(()=>{
        AOS.init({duration:1000});
    },[]);
  return (
    <div className='main-skills' id='skill-component'>
      <div className="skills-container">
        <div className="skills">
            <h1>My Skills & <span>Abilities</span></h1>
            <div className="skills-common">
                <div className="skills-img"><img src={html} alt="Html" /></div>
                <div className="skills-img"><img src={css} alt="css" /></div>
                <div className="skills-img"><img src={js} alt="js" /></div>
                <div className="skills-img"><img src={c} alt="c" /></div>
                <div className="skills-img"><img src={cpp} alt="c++" /></div>
                <div className="skills-img"><img src={bootstrap} alt="bootstrap" /></div>
                <div className="skills-img"><img src={react} alt="react" /></div>
                <div className="skills-img"><img src={redux} alt="redux" /></div>
                <div className="skills-img"><img src={npm} alt="npm" /></div>
                <div className="skills-img"><img src={git} alt="git" /></div>
                <div className="skills-img"><img src={github} alt="github" /></div>
                <div className="skills-img"><img src={vscode} alt="vscode" /></div>
            </div>
        </div>
      </div>
    </div>
  )
}
