// https://www.w3schools.com/howto/howto_js_accordion.asp (regular js accordion)
// https://contactmentor.com/accordion-react-js/ (using state)
import React, { useState } from 'react';

import './Accordion.scss';

const Accordion = () => {

    const [active, setActive] = useState(false);
    // when button is active, sibling panel's style changes from <nothing> to the max height
    const [styleForWhenSiblingActivePanel, setStyleForWhenSiblingActivePanel] = useState('');
    

    // ---------- Trying to replace this (below) ----------
    // ----- Also, takes two clicks to work for some reason -----
    const slideDown = () => {
        // Animated slide down accordion (babel)
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            });
        }
    }
    // ---------- Trying to replace this (above) ^^^ ----------

    const handleAccordionClick = (e) => {
        console.log(e.target)
        setActive(!active); // toggle

        // create variable for scroll height of the panel
        let scrollHeightOfPanel = e.target.nextElementSibling.style.maxHeight = e.target.nextElementSibling.scrollHeight + "px";

        // set the style for panel to toggle from <nothing> to the max height
        if (active === true){
            let panel = e.target.nextElementSibling;
            
            if (!panel.style.maxHeight) {
                setStyleForWhenSiblingActivePanel(panel.style.maxHeight = scrollHeightOfPanel);
            } else {
                setStyleForWhenSiblingActivePanel(panel.style.maxHeight = null);
            }
        }
    }

// style={{color: 'red', maxHeight: null}}

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

        <button className="accordion" onClick={slideDown}>Section 3</button>
        <div className="panel">
            <p>Lorem ipsum...</p>
        </div>
    </div>
  )
}

export default Accordion;