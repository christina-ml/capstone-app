import React from 'react';

const User = ({user}) => {

  const { uid, firstname, lastname, username, user_password, user_email, user_active, user_interests, user_city, user_state } = user;

  return (
    <div className="user">
        <div className="userCard__info">
          <div className="userCard__name">
            <h1>{firstname} {lastname}</h1>
          </div>
          <div className="userCard__infoLine">
            First Name: {firstname}
          </div>
          <div className="userCard__infoLine">
            Last Name: {lastname}
          </div>
          <div className="userCard__infoLine">
            ID: {uid}
            Username: {username}
          </div>
          <div className="userCard__infoLine">
            Password: {user_password}
            Active? {user_active ? <span>Yes</span> : <span>No</span>}
          </div>
          <div className="userCard__infoLine">
            Interests: {user_interests}
            City: {user_city}
            State: {user_state}
            Email: {user_email}
          </div>
        </div>

    </div>
  )
}

export default User;