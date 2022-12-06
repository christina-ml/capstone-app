import React from 'react';

import './NavbarLogo.scss';

const NavbarLogo = ({logo}) => {
  return (
    <div className="navbarLogo">
        <div className="navbarLogo__cryptotalkLogo">
            <img src={logo} alt="cryptotalk logo" />
        </div>
        <div className="navbarLogo__appName">
            CryptoTalk
            <div className="navbarLogo__appName__tag">
                Talk Crypto To Me
            </div>
        </div>
    </div>
  )
}

export default NavbarLogo;