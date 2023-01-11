// Using React Hooks
// https://www.youtube.com/watch?v=91qEdc6dSUs

import React, { useEffect, useState } from 'react';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';
import axios from 'axios';

import "./Login.scss";

const API = process.env.REACT_APP_API_URL;

const Login = () => {
  // const adminUser = {
  //   lastname: "admin@admin.com",
  //   password: "admin123"
  // }

    // hooks
    const [users, setUsers] = useState([]);

    // -- USING AXIOS --
    useEffect(() => {   
    axios.get(API + "/users")
        .then((res) => {
            setUsers(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [API]);


    const [user, setUser] = useState({ 
      firstname: "", 
      lastname: "",
      username: "",
      user_password: "",
      user_email: "",
      user_admin: "",
      user_interests: "",
      user_city: "",
      user_state: ""
    })
    const [error, setError] = useState("");

    const login = (details) => {
      console.log("details:", details);


      users.map((userInDB) => {
      // user logging in - if `firstname` and `lastname` match the `userInDB`
      if (details.firstname === userInDB.firstname && 
          details.lastname === userInDB.lastname){
            // console.log("Logged in");
            setUser({
              firstname: details.firstname,
              lastname: details.lastname,
              username: details.username,
              user_password: details.user_password,
              user_email: details.user_email,
              user_admin: details.user_admin,
              user_interests: details.user_interests,
              user_city: details.user_city,
              user_state: details.user_state
            });
        } else {
          // error - user not logged in
          // console.log("Not logged in - details do not match")
          setError(`Not logged in:
          ${details.firstname === userInDB.firstname ? "" : 
            `firstname does not match`}
           ${details.lastname === userInDB.lastname ? "" :
             `lastname does not match`}
          `)
        }
      })
    }

    const logout = () => {
        console.log("Logout");
        // set `user` back to default values
        setUser({
          firstname: "", 
          lastname: "",
          username: "",
          user_password: "",
          user_email: "",
          user_admin: "",
          user_interests: "",
          user_city: "",
          user_state: ""
      });
    }

  return (
    <div className="login">
      <div className="login__container">
        {(user.lastname !== '') ? (
          <div className="login__container__welcome">
            <h2>Welcome, <span>{user.firstname} {user.lastname}</span></h2>

            <div>
              You are logged in now.
            </div>

            <div className="login__container__welcome__info">
              Your lastname is: {user.lastname}
              your city is {user.user_city}
              your password is {user.user_password}
              your username is {user.username}
              <br />
                <Link to="/users">
                All Users
                </Link>
            </div>

            <div className="login__container__welcome__logoutButton">
              <button onClick={logout}>Logout</button>
            </div>
          </div>
        ) : (
          <div className="login__container__startpage">
            <div className="login__container__startpage__first">
              <LoginForm login={login} error={error} />
            </div>
            <div className="login__container__startpage__buttonContainer">
            Not a member? &nbsp;
            <Link to="/create" >
              <div className="login__container__startpage__buttonContainer__create">
                Sign Up
              </div>
            </Link>
            </div>
          </div>
        )
      
      }
      </div>
    </div>
  )
}

export default Login;