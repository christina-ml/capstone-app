import React, { useState } from 'react';

const LoginForm = ({ login, error }) => {

    const [details, setDetails] = useState({ 
        name: "", 
        email: "", 
        password: "" 
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        login(details);
    }

    const handleTextChange = (event) => {
        setDetails({...details, [event.target.id]: event.target.value });
    }

  return (
    <div className="loginForm">
        LoginForm
        <form onSubmit={handleSubmit} >
            <div className="loginForm__inner">
                <h2>Login</h2>
                    {error}

                <div className="loginForm__group">
                    <label htmlFor="name">Name: </label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        value={details.name}
                        onChange={handleTextChange}
                    />
                </div>
                <div className="loginForm__group">
                    <label htmlFor="email">Email: </label>
                    <input 
                        type="text"
                        id="email"
                        name="email"
                        value={details.email}
                        onChange={handleTextChange}
                    />
                </div>
                <div className="loginForm__group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        value={details.password}
                        onChange={handleTextChange}
                    />
                </div>
                <input
                    type="submit"
                    value="Log In"
                />




            </div>



        </form>
    </div>
  )
}

export default LoginForm;