// Using Local Storage
// https://www.youtube.com/watch?v=UBV2vtkKR5o
// https://github.com/AkajithAk/youtubeReact/tree/main/src/Components/LoginWithLocalstorage

import React from 'react';

import './LoginLS.scss';

const LoginLSHome = () => {

    // clear local storage to logout the user
    const handleLogoutClick = () => {
        localStorage.clear();
        window.location.reload();
    }

    // get the variables from local storage
   const getUsername=localStorage.getItem("usernameData");
   const getPassword=localStorage.getItem("passwordData");

  return (

    <div className="LoginLSHome">
        <div>Welcome, {getUsername}!</div>
        <div>Your password is: {getPassword}</div>
        <button onClick={handleLogoutClick}>Logout</button>

    </div>
  )
}

export default LoginLSHome;