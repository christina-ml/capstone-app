import React from 'react';

import './LearnPanelDetails.scss';

const LearnPanelDetails = ({learn}) => {
  return (
    <div className="LearnPanelDetails">
        <p>{learn.answer}</p>
        <div className="LearnPanelDetails__topic">
            <a href={learn.source} target="_" >Source</a>
            &nbsp;
            Topic: {learn.topic}
        </div>
    </div>
  )
}

export default LearnPanelDetails;