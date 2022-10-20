// https://www.w3schools.com/howto/howto_js_accordion.asp (regular js accordion)
// https://contactmentor.com/accordion-react-js/ (using state)
import React, { useState } from 'react';

import './Accordion.scss';

const Accordion = () => {

    const [active, setActive] = useState(false);
    

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
    }



  return (
    <div>
        <button className="accordion" onClick={handleAccordionClick} >Section 1</button>
        <div className="panel">
            <p>Lorem ipsum...</p>
        </div>

        <button className="accordion" onClick={slideDown} >Section 2</button>
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