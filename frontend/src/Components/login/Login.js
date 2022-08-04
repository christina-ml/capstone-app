import React, { useState } from 'react';
import LoginForm from './LoginForm';

const Login = () => {

    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({ name: "", email: "" })
    const [error, setError] = useState("");

    const login = (details) => {
      console.log(details);
    }

    const logout = () => {
        console.log("Logout");
    }

  return (
    <div className="login">
      Login
      {(user.email !== '') ? (
        <div>
          <h2>Welcome, <span>{user.name}</span></h2>
          <button>Logout</button>
        </div>
      ) : (
        <LoginForm login={login} error={error} />
      )
    
    }
    </div>
  )
}

export default Login;