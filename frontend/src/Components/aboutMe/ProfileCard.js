import React from "react";

import "./ProfileCard.scss";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";

import christinaResume from '../../assets/Christina_Loiacono_Resume_JrDeveloper.pdf';

const ProfileCard = () => {
  return (
    <div className="profileCard">
      <div className="profileCard__topImage">
        <img src="https://media.istockphoto.com/vectors/wavy-abstract-backgrounds-for-design-of-web-banners-packaging-posters-vector-id1211961939?b=1&k=20&m=1211961939&s=170667a&w=0&h=zAfk6widLaz3ZWrpUdxHi1ez_8_5aO2W2wA8fvhs9QE=" />
      </div>
      <div className="profileCard__userImage">
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGxXy5-vhZvxQ/profile-displayphoto-shrink_400_400/0/1634932169191?e=1670457600&v=beta&t=zcPca-xG6fEmjnGhlZyKGmZDbxyknYHNT-y1JN2MN6s" />
      </div>
      <div className="profileCard__userInfo">
        <div className="profileCard__userInfo__userPersonalInfo">
          <div className="profileCard__userInfo__userNameAndDescription">
            <div className="profileCard__userInfo__userNameAndDescription__userName">
              Christina Loiacono
            </div>
            <div className="profileCard__userInfo__userNameAndDescription__userDescription">
              Pursuit Fellow | Full Stack Web Developer
            </div>
          </div>
          {/* <a className="profileCard__userInfo__followButton" href="https://www.linkedin.com/in/christina-loiacono/" target="_" alt="LinkedIn Profile">
                <div>
                    LinkedIn
                </div>
            </a> */}
          <div className="profileCard__userInfo__threeColumns">

            <a href="https://www.linkedin.com/in/christina-loiacono/" 
                target="_" 
                className="profileCard__userInfo__threeColumns__quantityAndType"
            >
                <div className="profileCard__userInfo__threeColumns__socialIcon">
                    <FaLinkedin />
                </div>
                <div className="profileCard__userInfo__threeColumns__type">
                    LinkedIn
                </div>
            </a>

            <a href="https://github.com/christina-ml" 
                target="_" 
                className="profileCard__userInfo__threeColumns__quantityAndType"
            >
                <div className="profileCard__userInfo__threeColumns__socialIcon">
                    <FaGithub />
                </div>
                <div className="profileCard__userInfo__threeColumns__type">
                    GitHub
                </div>
            </a>

            <a href={christinaResume} download
                className="profileCard__userInfo__threeColumns__quantityAndType"
            >
                <div className="profileCard__userInfo__threeColumns__socialIcon">
                    <IoDocumentTextSharp />
                </div>

                <div className="profileCard__userInfo__threeColumns__type">
                  Skills
                </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
