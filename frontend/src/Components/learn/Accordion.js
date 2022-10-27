import React, { useState } from 'react';

import './Accordion.scss';

// learn panel details (answers to the questions)
import LearnPanelDetails from './LearnPanelDetails';

const Accordion = ({learn}) => {
    // when button is active, sibling panel's style changes from <nothing> to the max height
    const [active, setActive] = useState(false);

    const handleAccordionClick = (e) => {
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
        <button className={`accordion ${active}`} onClick={handleAccordionClick} >{learn.question}</button>
        <div className="panel">
            <LearnPanelDetails learn={learn} />
        </div>
    </div>
  )
}

export default Accordion;