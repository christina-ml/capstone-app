import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {

  const { uid,
    firstname,
    lastname,
    username,
    photo
    // user_password,
    // user_email,
    // user_active,
    // user_interests,
    // user_city,
    // user_state 
  } = user;

  return (
    <div className="userCard">
      <div className="userCard__info">
        <div className="userCard__info__name">
          <h1>{firstname} {lastname}</h1>
        </div>
        <div className="userCard__info__infoLine">
          ID: {uid}
        </div>
        <div className="userCard__info__infoLine">
          Username: {username}
        </div>
        <div className="userCard__info__infoLine__button">
          <Link to={`/users/${uid}`} >
            See User Details
          </Link>
        </div>
      </div>
      <div className="userCard__profileImage">
        <img src={photo} />
      </div>
    </div>
  )
}

export default User;