import React from 'react';

import './Accordion.scss';

// react icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = () => {

    const handleClick = () => {
        console.log("you clicked the accordion")
    }

  return (
    <div>
        <div class="accordion">
            <div class="accordion__header" onClick={handleClick}>
                <span>Question Goes Here</span>
                <div>
                    <IoIosArrowDown />
                </div>
            </div>
            <div class="accordion__text">
                Answer to question - Lorem Ipsum sdrawkcab delleps nehw drow rehtona si taht drow a saw taht spoo won rof sdrawkcab tsuj sti eb ot desoppus txet eht si tahw.
            </div>
        </div>
    </div>
  )
}

export default Accordion;