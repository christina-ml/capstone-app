import React, { useState } from 'react';

import "./NavBar.scss";

// instead of hard-coding menu items, store as JSON
import menuItemData from "./data/menuData.json";

const NavBar = () => {

  // simple hook setting it to false
  const [active, setActive] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__logo">
          Logo
      </div>
      <div className={active ? "navbar__menuItems navbar__menuItems-active" : "navbar__menuItems"} >
        <ul>
          {menuItemData.map((menuItem, key)=>{
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
        =
      </div>
    </div>
  )
}

export default NavBar;

// Block - Element - Modifier (BEM)

// Example: className="navbar__logo"
// block name (double underscore) element name