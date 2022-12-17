import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "./NavBar.scss";
import logo from "../../assets/cryptotalk-logo.png"

// import logo component
import NavbarLogo from './NavbarLogo.js';

// react-icons
import { HiMenu } from 'react-icons/hi';
import { MdDarkMode, MdOutlineDarkMode, MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

// instead of hard-coding menu items, store as JSON
import menuItemData from "./data/menuData.json";

const NavBar = ({darkModeButton}) => {

  // simple hook setting it to false
  const [toggleCollapsedMenu, setToggleCollapsedMenu] = useState(false);
  const [currentHoverMenu, setCurrentHoverMenu] = useState(null);

  // for toggle button click event
  const [toggleButton, setToggleButton] = useState(null);
  const [toggleText, setToggleText] = useState(null);

  // displaying submenu items
  const [displaySubMenu, setDisplaySubMenu] = useState(true);


  const handleToggleClick = () => {
    setToggleText(!toggleText)
    setToggleButton(!toggleButton);
  }

  return (
    <div className="navbar">
      <div className="navbar__items">
        <Link to="/">
          <NavbarLogo logo={logo} />
        </Link>

        <div className="navbar__collapsedMenuIcon"
            onClick={()=> {
              setToggleCollapsedMenu(!toggleCollapsedMenu)
            }}
        >
          <HiMenu />
        </div>

        <div className="navbar__menuItemData">
            {menuItemData.map((menuItem, index) => {
              return (
                <div key={menuItem + index} id={index}>
                  {menuItem.text && menuItem.submenu ? (
                    <div className="navbar__menuItemData__submenuItem"
                      onMouseEnter={() => {
                        setDisplaySubMenu(true)
                        setCurrentHoverMenu(index)
                      }}
                      onMouseLeave={() => {
                        setDisplaySubMenu(false)
                        setCurrentHoverMenu(null)
                      }}
                    >
                      
                      <a href={menuItem.href}>{menuItem.text} 
                        {
                          displaySubMenu && menuItem.submenu ?
                          <MdKeyboardArrowUp /> :
                          <MdKeyboardArrowDown />
                        }
                      </a>

                      <div className="submenuItemLink">
                        {currentHoverMenu === index && menuItem.submenu.map((submenuItem, subIndex) => {
                          return (
                            <a key={submenuItem + subIndex} href={submenuItem.submenuHref}>{submenuItem.submenuText}</a>
                          )
                        })}
                      </div>
                      
                    </div>
                  ) : (
                    <div className="navbar__menuItemData__menuItem">
                      <a href={menuItem.href}>{menuItem.text}</a>
                    </div>
                  )}
                </div>
              )
            })}
        </div>



      </div>

      {/* <div className="nav">
        <ul className="menuItemsUl">
          {menuItemData.map((menuItem, index)=>{
            return (
                <li className="menuItemsLi" key={index} >
                  
                  {menuItem.href && menuItem.submenu ? (
                    <>
                      <button>
                        {menuItem.text}
                      </button>

                      <p> dropdown submenu items </p>
                      <ul className="submenuUl">
                      {menuItem.submenu.map((subLink, index) => {
                        return (
                            <li className="submenuLi" key={index}>
                              <a href={subLink.submenuHref} >{subLink.submenuText}</a>
                            </li>
                        );
                      })}
                      </ul>
                    </>
                    ) : (
                    <a href={menuItem.href}>{menuItem.text}</a>
                  )}
                </li>
              )
            })
          }

          <li>
            {darkModeButton}
          </li>
        </ul>
      </div> */}

    </div>
  )
}

export default NavBar;

// article on creating dropdowns:
// https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/


// Block - Element - Modifier (BEM)

// Example: className="navbar__logo"
// block name (double underscore) element name