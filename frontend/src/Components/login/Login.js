import React, { useState } from 'react';
import LoginForm from './LoginForm';

const Login = () => {

    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({ firstname: "", email: "" })
    const [error, setError] = useState("");

    const login = (details) => {
      console.log(details);
      // user logging in
      if (details.email === adminUser.email && 
          details.password === adminUser.password){
            console.log("Logged in");
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
      Login Page
      {(user.email !== '') ? (
        <div>
          <h2>Welcome, <span>{user.firstname} {user.lastname}</span></h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <LoginForm login={login} error={error} />
      )
    
    }
    </div>
  )
}

export default Login;