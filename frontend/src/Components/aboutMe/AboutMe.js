import React from 'react';

import './AboutMe.scss';

const AboutMe = () => {
  return (
    <div className="aboutMe">
        <div className="aboutMe__profileCard">
            <div className="aboutMe__profileCard__topImage">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCtZbVmTUw3o5W_z_yCkM3j-tQEz8HCdiQpg&usqp=CAU" />
            </div>
            <div className="aboutMe__profileCard__userImage">
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGxXy5-vhZvxQ/profile-displayphoto-shrink_400_400/0/1634932169191?e=1670457600&v=beta&t=zcPca-xG6fEmjnGhlZyKGmZDbxyknYHNT-y1JN2MN6s"/>
            </div>
            <div className="aboutMe__profileCard__userInfo">
                <div className="aboutMe__profileCard__userInfo__userPersonalInfo">
                <div className="aboutMe__profileCard__userInfo__userNameAndDescription">
                    <div className="aboutMe__profileCard__userInfo__userNameAndDescription__userName">
                        Christina Loiacono
                    </div>
                    <div className="aboutMe__profileCard__userInfo__userNameAndDescription__userDescription">Pursuit Fellow | Full Stack Web Developer</div>
                </div>
                <a className="aboutMe__profileCard__userInfo__followButton" href="https://www.linkedin.com/in/christina-loiacono/" target="_" alt="LinkedIn Profile">
                    <div>
                        LinkedIn
                    </div>
                </a>
                <div className="aboutMe__profileCard__userInfo__threeColumns">
                    <div className="aboutMe__profileCard__userInfo__threeColumns__quantityAndType">
                    <div className="aboutMe__profileCard__userInfo__threeColumns__quantity">137</div>
                    <div className="aboutMe__profileCard__userInfo__threeColumns__type">Articles</div>
                    </div>
                    <div className="aboutMe__profileCard__userInfo__threeColumns__quantityAndType">
                    <div className="aboutMe__profileCard__userInfo__threeColumns__quantity">5228</div>
                    <div className="aboutMe__profileCard__userInfo__threeColumns__type">Followers</div>
                    </div>
                    <div className="aboutMe__profileCard__userInfo__threeColumns__quantityAndType">
                    <div className="aboutMe__profileCard__userInfo__threeColumns__quantity">84</div>
                    <div className="aboutMe__profileCard__userInfo__threeColumns__type">Following</div>
                    </div>
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default AboutMe;