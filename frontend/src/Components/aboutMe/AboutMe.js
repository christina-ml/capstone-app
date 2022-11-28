import React from 'react';

import './AboutMe.scss';
import ProfileCard from './ProfileCard';

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="aboutMe__cards">
       <ProfileCard />
       <div className="bio">
        <p>
          I'm Christina, a Full Stack Web Developer from New York City.
        </p>
        <p>
          Currently I am a recent graduate of the Pursuit Fellowship program in NYC, an intensive 12 - month software engineering fellowship with a 9% acceptance rate.
        </p>
        <p>
          Please feel free to send a message and connect with me on LinkedIn.
        </p>
       </div>
      </div>
    </div>
  )
}

export default AboutMe;