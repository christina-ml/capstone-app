import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './NavBarRibbon.scss';

const NavBarRibbon = () => {
  let navigate = useNavigate();

  const handleRibbonButtonClick = () => {
    navigate('/about');
  }

  return (
    <div className="ribbon">
      <div className="ribbon__banner">
          <button 
            className="ribbon__banner__bannerText"
            onClick={handleRibbonButtonClick}
          >
            About Me
          </button>
      </div>
    </div>
  )
}

export default NavBarRibbon;