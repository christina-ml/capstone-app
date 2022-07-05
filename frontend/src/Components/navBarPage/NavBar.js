import React, { useState } from 'react';

import "./NavBar.scss";
import logo from "../../assets/cryptotalk-logo.png"

// react-icons
import { HiMenu } from 'react-icons/hi';

// instead of hard-coding menu items, store as JSON
import menuItemData from "./data/menuData.json";

const NavBar = () => {

  // simple hook setting it to false
  const [active, setActive] = useState(false);

  // for toggle button
  const [toggleButton, setToggleButton] = useState(null);
  const [toggleText, setToggleText] = useState(null);

  const handleToggle = () => {
    setToggleText(!toggleText)
    return setToggleButton(!toggleButton);
  }

  // <button onClick={() => handleToggle()}>click</button>
  // {toggleButton ? <span style={{backgroundColor: "red"}}>hi</span> :  <span style={{backgroundColor: "green"}}>low</span>}

  const isBackgroundRed = true;

  return (
    <div className="navbar">
      <a href="/">
        <div className="navbar__logo">
            <div className="navbar__logo__cryptotalkLogo">
              <img src={logo} alt="cryptotalk logo" />
            </div>
            <div className="navbar__logo__appName">
              CryptoTalk
              <div className="navbar__logo__appName__tag">
                Talk Crypto To Me
              </div>
            </div>
        </div>
      </a>

     
        {/* <button onClick={() => handleToggle()}>Theme</button>
        <style>{toggleButton ? 'body { background-color: white; }' : 'body { background-color: black; }'}</style> */}
     
          


      <div className={active ? "navbar__menuItems navbar__menuItems-active" : "navbar__menuItems"} >
        <ul>
          {menuItemData.map((menuItem, key)=>{
            if (menuItem.type){
              return (
                <li>
                  <a className="navbar__menuItems__nightDay" href={menuItem.href} onClick={() => handleToggle()}>{toggleText ? `${menuItem.text1}` : `${menuItem.text2}`}</a>
                  <style>{toggleButton ? `${menuItem.style2}`: `${menuItem.style1}`}</style>
                </li>
              )
            }


            return (
                <li key={key}>
                  <a href={menuItem.href}>{menuItem.text}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="navbar__collapsedMenuIcon"
          onClick={()=> {
            setActive(!active)
          }}
      >
        <HiMenu />
      </div>
    </div>
  )
}

export default NavBar;

// Block - Element - Modifier (BEM)

// Example: className="navbar__logo"
// block name (double underscore) element name