import React, { useState } from 'react';

// https://www.youtube.com/watch?v=91qEdc6dSUs

const Login = () => {

    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({ name: "", email: "" })
    const [error, setError] = useState("");

    const Logout = () => {
        console.log("Logout");
    }

  return (
    <div>Login</div>
  )
}

export default Login;