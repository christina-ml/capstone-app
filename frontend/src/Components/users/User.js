import React from 'react';

const User = ({user}) => {
  return (
    <div>
        <h2>Username: {user.username}</h2>
        <div>
            ID: {user.uid}
            Username: {user.username}
            Password: {user.user_password}
            Active? {user.user_active}
            First Name: {user.firstname}
            Last Name: {user.lastname}
            Interests: {user.user_interests}
            City: {user.user_city}
            State: {user.user_state}
            Email: {user.user_email}
        </div>

    </div>
  )
}

export default User;