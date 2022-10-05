// Using Local Storage
// https://www.youtube.com/watch?v=UBV2vtkKR5o
// https://github.com/AkajithAk/youtubeReact/tree/main/src/Components/LoginWithLocalstorage

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

import './LoginLS.scss';

// import login home page
import LoginLSHome from './LoginLSHome';

const API = process.env.REACT_APP_API_URL;

const LoginLS = () => {

  // // hooks
  // const [users, setUsers] = useState([]);

  // // -- USING AXIOS --
  // useEffect(() => {   
  //   axios.get(API + "/users")
  //     .then((res) => {
  //         console.log("res.data:", res.data)
  //         setUsers(res.data);
  //     }).catch((err) => {
  //         console.log(err);
  //     })
  // }, []);



  // set variables for login
  const username = useRef();
  const password = useRef();

  // get the variables from local storage
  const getUsername=localStorage.getItem("usernameData");
  const getPassword=localStorage.getItem("passwordData");

  // set the variables to local storage
  const handleSubmit = () => {
    if (username.current.value=="adminuser"&&password.current.value=="admin123"){
      localStorage.setItem("usernameData", "adminuser");
      localStorage.setItem("passwordData", "admin123");
    }
  }

  // ternary for either home page or login form
  return (
    <div className="LoginLS">
      {
        getUsername && getPassword ? <LoginLSHome /> :
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" ref={username} placeholder="username" />
          </div>
          <div>
          <input type="password" ref={password} placeholder="password" />
          </div>
          <button>Login</button>
        </form>
      }
    </div>
  )
}

export default LoginLS;