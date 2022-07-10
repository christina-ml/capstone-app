import React, { useState } from 'react';

import "./NavBar.scss";
import logo from "../../assets/cryptotalk-logo.png"

// react-icons
import { HiMenu } from 'react-icons/hi';
import { MdDarkMode } from 'react-icons/md';
import { MdOutlineDarkMode } from 'react-icons/md';


// instead of hard-coding menu items, store as JSON
import menuItemData from "./data/menuData.json";

const NavBar = () => {

  // simple hook setting it to false
  const [active, setActive] = useState(false);

  // for toggle button click event
  const [toggleButton, setToggleButton] = useState(null);
  const [toggleText, setToggleText] = useState(null);

  const handleToggleClick = () => {
    setToggleText(!toggleText)
    setToggleButton(!toggleButton);
  }

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

      <div className={active ? "navbar__menuItems navbar__menuItems-active" : "navbar__menuItems"} >
        <ul>
          {menuItemData.map((menuItem, key)=>{
            if (menuItem.type){
              return (
                <li className="navbar__menuItems__nightDay">
                      <a href={menuItem.href} onClick={() => handleToggleClick()}>{toggleText ? <MdDarkMode /> : <MdOutlineDarkMode />}</a>
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