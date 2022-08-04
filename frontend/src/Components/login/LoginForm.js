import React, { useState } from 'react';

const LoginForm = ({ login, error }) => {

    const [details, setDetails] = useState({ 
        firstname: "", 
        lastname: "", 
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
                    {/* if there is an error, pass in the error */}
                    {(error !== '') ? 
                        (<div className="loginForm__error">{error}</div>) : 
                        ""
                    }

                <div className="loginForm__group">
                    <label htmlFor="firstname">First Name: </label>
                    <input 
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={details.firstname}
                        onChange={handleTextChange}
                    />
                </div>
                <div className="loginForm__group">
                    <label htmlFor="lastname">Last Name: </label>
                    <input 
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={details.lastname}
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