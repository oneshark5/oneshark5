import React, {useState, useEffect} from 'react';
import './App.css';
import './assets/css/code.css';
import './assets/css/onedark.css';

import profileImg from './assets/img/shark.jpg';

import githubIcon from './assets/img/icons/github.png';
import htmlIcon from './assets/img/icons/html.webp';
import mysqlIcon from './assets/img/icons/mysql.webp';
import JavaScriptIcon from './assets/img/icons/javaScript.png';

import ReactIcon from './assets/img/icons/react.png'; //https://iconscout.com/icons/react
import NodeJsIcon from './assets/img/icons/nodejs.png';
import BlenderIcon from './assets/img/icons/blender.png';

import {
  IntroCard,
  LangCard,
  SocialCard,
  ProjectCard
} from './cards.js';

function App() {

  const [card1, setCard1] = useState(1)
  const [card2, setCard2] = useState(-2)
  const [card3, setCard3] = useState(-1)
  const [card4, setCard4] = useState(0)
  // const [card5, setCard5] = React.useState(0)

  const [isMobo, setMobo] =  React.useState(()=>{
    return window.outerWidth<=650;
  })

  window.addEventListener('resize',()=>{
    setMobo(window.outerWidth<=650);
  });

  document.body.dataset.page = "home"

  const handleOnClick = ()=>{
    if(card1==2) setCard1(-1);
    else setCard1(card1+1);

    if(card2==2) setCard2(-1);
    else setCard2(card2+1);

    if(card3==2) setCard3(-1);
    else setCard3(card3+1);

    if(card4==2) setCard4(-1);
    else setCard4(card4+1);
  }

  const states = {
    "-3": "",
    "-2": "",
    "-1": "",
    "0": " followed",
    "1": " front",
    "2": " fall"
  }

  const links = {
    "github" : "https://github.com/blueedgetechno",
    "twitter" : "https://twitter.com/blueedgetechno"
  }

  const clicked = (altValue)=>{
    return;
    window.open(links[altValue], "_blank");
  }

  useEffect(()=>{
  })

  return (
    <div className="home">
      <div className="intro">
        {/* 卡片切换 */}
        <div className="introCards" onClick={handleOnClick}>
          <IntroCard count={0} curState={states[card1]}/>
          <ProjectCard count={1} curState={states[card2]}/>
          <SocialCard count={2} curState={states[card3]}/>
          <LangCard count={3} curState={states[card4]}/>
        </div>

        
        <div className="profileImage">
          <img className="introImage" src={profileImg} alt="profile"/>
          <div className="ringCircle innerCircle">
            <img onClick={()=>{
              clicked("twitter");
            }} className="planetCircle" src={htmlIcon} alt="twitter"/>
            <img onClick={()=>{
              clicked("github");
            }} className="planetCircle" src={JavaScriptIcon} alt="github"/>
          </div>
          <div className="ringCircle outerCircle">
            <img className="planetCircle" src={ReactIcon} alt=""/>
            <img className="planetCircle" src={BlenderIcon} alt=""/>
            <img className="planetCircle" src={githubIcon} alt=""/>
            <img className="planetCircle" src={mysqlIcon} alt=""/>
            <img className="planetCircle" src={mysqlIcon} alt=""/>
            <img className="planetCircle" src={NodeJsIcon} alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
