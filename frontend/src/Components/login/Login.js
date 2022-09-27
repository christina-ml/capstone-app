import React, { useState } from 'react';
import LoginForm from './LoginForm';
import { Link } from 'react-router-dom';

import "./Login.scss";

const Login = () => {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

    const [user, setUser] = useState({ firstname: "", email: "" })
    const [error, setError] = useState("");

    const login = (details) => {
      console.log(details);
      // user logging in - if `email` and `password` match the `adminUser`
      if (details.email === adminUser.email && 
          details.password === adminUser.password){
            // console.log("Logged in");
            setUser({
              firstname: details.firstname,
              lastname: details.lastname,
              email: details.email
            });
        } else {
          // error - user not logged in
          // console.log("Not logged in - details do not match")
          setError(`Not logged in:
          ${details.email === adminUser.email ? "" : 
            `Email does not match`}
           ${details.password === adminUser.password ? "" :
             `password does not match`}
          `)
        }
    }

    const logout = () => {
        console.log("Logout");
        // set `user` back to default values
        setUser({
          firstname: "", 
          email: "" 
      });
    }

  return (
    <div className="login">
      <div className="login__container">
        {(user.email !== '') ? (
          <div className="login__container__welcome">
            <h2>Welcome, <span>{user.firstname} {user.lastname}</span></h2>

            <div>
              You are logged in now.
            </div>
            <hr />
            <div className="login__container__welcome__info">
              Links:
              <br />
                <Link to="/users">
                All Users
                </Link>
            </div>
            <hr />
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