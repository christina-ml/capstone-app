import React, { useState } from "react";

import "./AboutMe.scss";
import ProfileCard from "./ProfileCard";
import QrCode from "./QrCode";

const AboutMe = () => {
  const [qrIsOpen, setQrIsOpen] = useState(false);

  const handleShareButtonClick = (e) => {
    e.preventDefault();
    setQrIsOpen(!qrIsOpen);
  }

  return (
    <div className="aboutMe">
      <div className="aboutMe__cards">
        <ProfileCard />
        <div className="bio">
          <p>I'm Christina, a Full Stack Web Developer from New York City.</p>
          <p>
            Currently I am a recent graduate of the Pursuit Fellowship program
            in NYC, an intensive 12 - month software engineering fellowship with
            a 9% acceptance rate.
          </p>
          <p>
            Please feel free to send a message and connect with me on LinkedIn.
          </p>
        </div>
        <button className="shareButton" onClick={handleShareButtonClick}>
          <span>Share CryptoTalk</span>
        </button>
        {qrIsOpen &&
          <div className="qrSection">
            <div className="qrSection__centerDiv">
              <QrCode />
              <div className="qrShareText">Share CryptoTalk with your friends</div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default AboutMe;
