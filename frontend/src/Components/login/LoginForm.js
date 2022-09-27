import React, { useState } from 'react';
import "./LoginForm.scss";

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

  // if there is an error, pass in the error
    return (
        <div className="loginForm">
            <form className="loginForm__form" onSubmit={handleSubmit} >
                <div className="loginForm__form__inner">
                    <h2>Login</h2>
                        {(error !== '') ? 
                            (<h4 className="loginForm__form__error">{error}</h4>) : 
                            ""
                        }
                    <div className="loginForm__form__inner__fields">
                        <div className="loginForm__form__inner__fields__group">
                            <label htmlFor="firstname">First Name: </label>
                            <input 
                                type="text"
                                id="firstname"
                                name="firstname"
                                value={details.firstname}
                                onChange={handleTextChange}
                                placeholder="First Name"
                            />
                        </div>
                        <div className="loginForm__form__inner__fields__group">
                            <label htmlFor="lastname">Last Name: </label>
                            <input 
                                type="text"
                                id="lastname"
                                name="lastname"
                                value={details.lastname}
                                onChange={handleTextChange}
                                placeholder="Last Name"
                            />
                        </div>
                        <div className="loginForm__form__inner__fields__group">
                            <label htmlFor="email">Email: </label>
                            <input 
                                type="text"
                                id="email"
                                name="email"
                                value={details.email}
                                onChange={handleTextChange}
                                placeholder="Email"
                            />
                        </div>
                        <div className="loginForm__form__inner__fields__group">
                            <label htmlFor="password">Password: </label>
                            <input 
                                type="password"
                                id="password"
                                name="password"
                                value={details.password}
                                onChange={handleTextChange}
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <div className="loginForm__submitButton">
                        <input
                            type="submit"
                            value="Log In"
                        />
                    </div>

                </div>
            </form>
        </div>
    )
}

export default LoginForm;