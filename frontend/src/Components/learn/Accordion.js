// https://www.w3schools.com/howto/howto_js_accordion.asp (regular js accordion)
// https://contactmentor.com/accordion-react-js/ (using state)
import React, { useState } from 'react';

import './Accordion.scss';

const Accordion = () => {

    const [active, setActive] = useState(false);
    // when button is active, sibling panel's style changes from <nothing> to the max height
    
    const handleAccordionClick = (e) => {
        // console.log(e.target)
        setActive(!active); // toggle

        // create variable for scroll height of the panel
        let scrollHeightOfPanel = e.target.nextElementSibling.style.maxHeight = e.target.nextElementSibling.scrollHeight + "px";

        // set the style for panel to toggle from <nothing> to the max height
        if (active === true){
            let panel = e.target.nextElementSibling;
            
            if (!panel.style.maxHeight) {
                panel.style.maxHeight = scrollHeightOfPanel
            } else {
                panel.style.maxHeight = null
            }
        }
    }

  return (
    <div>
        <button className={`accordion ${active}` } onClick={handleAccordionClick}  >Section 1</button>
        <div className="panel">
            <p>Lorem ipsum...</p>
        </div>

        <button className="accordion" onClick={handleAccordionClick} >Section 2</button>
        <div className="panel">
            <p>Lorem ipsum...</p>
        </div>

        <button className="accordion" onClick={handleAccordionClick}>Section 3</button>
        <div className="panel">
            <p>Lorem ipsum...</p>
        </div>
    </div>
  )
}

export default Accordion;