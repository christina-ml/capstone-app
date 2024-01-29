import React from 'react';
import { Link } from 'react-router-dom';

import './SidebarViewCybersecurity.scss';

import { MdDoubleArrow } from "react-icons/md";

const SidebarViewCybersecurity = () => {
  return (
    <div className="sidebar">
        <div className="sidebar__title">
            <span className="red-circle"></span>
            <span className="sidebar__title__announcement">NEW!</span>
            Cybersecurity
        </div>
        <div className="sidebar__cryptolist">
            <MdDoubleArrow style={{color:"red", verticalAlign:"bottom", fontSize:"20px", marginRight:"5px"}} />
            <Link to="/news/cybersecurity">Cybersecurity News In Crypto</Link>
        </div>
    </div>
  )
}

export default SidebarViewCybersecurity;