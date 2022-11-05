import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "./Users.scss";

const API = process.env.REACT_APP_API_URL;

function UserNewForm() {
  let navigate = useNavigate();

  const addUser = (newUser) => {
    axios
      .post(`${API}/users`, newUser)
      .then(
        () => {
          navigate('/users');
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    username: '',
    user_password: '',
    user_email: '',
    user_admin: false,
    user_interests: '',
    user_city: '',
    user_state: '',
    photo: ''
  });


  const handleTextChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  }

  const handleCheckboxChange = () => {
    setUser({ ...user, user_admin: !user.user_admin });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(user);
    navigate(`/users`);
  }

  return (
    <div className="UserNewForm">
      <div className="UserNewForm__container">
        <form className="UserNewForm__container__form" onSubmit={handleSubmit}>
          <div className="UserNewForm__container__form__inner">
            <h2>Sign Up</h2>
          </div>
          <div className="UserNewForm__container__form__inner__fields">
            <div className="UserNewForm__container__form__inner__fields__group">
              <label htmlFor='firstname'>First Name: </label>
              <input 
                id="firstname"
                value={user.firstname}
                type="text"
                onChange={handleTextChange}
                placeholder="First Name"
              />
            </div>

            <div className="UserNewForm__container__form__inner__fields__group">
              <label htmlFor='lastname'>Last Name: </label>
              <input 
                id="lastname"
                value={user.lastname}
                type="text"
                onChange={handleTextChange}
                placeholder="Last Name"
              />        
            </div>

            <div className="UserNewForm__container__form__inner__fields__group">
              <label htmlFor='username'>Username: </label>
              <input 
                id="username"
                value={user.username}
                type="text"
                onChange={handleTextChange}
                placeholder="Username"
              />
            </div>

            <div className="UserNewForm__container__form__inner__fields__group">
              <label htmlFor='user_password'>Password: </label>
              <input 
                id="user_password"
                value={user.user_password}
                type="text"
                onChange={handleTextChange}
                placeholder="Password"
              />
            </div>

            <div className="UserNewForm__container__form__inner__fields__group">
              <label htmlFor='user_email'>Email: </label>
              <input 
                id="user_email"
                value={user.user_email}
                type="text"
                onChange={handleTextChange}
                placeholder="User Email"
              />
            </div>

            <div className="UserNewForm__container__form__inner__fields__group">
              <label htmlFor='user_interests'>Interests: </label>
              <input 
                id="user_interests"
                value={user.user_interests}
                type="text"
                onChange={handleTextChange}
                placeholder="User Interests"
              />
            </div>

            <div className="UserNewForm__container__form__inner__fields__group">
              <label htmlFor='user_city'>City: </label>
              <input 
                id="user_city"
                value={user.user_city}
                type="text"
                onChange={handleTextChange}
                placeholder="User City"
              />
            </div>

            <div className="UserNewForm__container__form__inner__fields__group">
              <label htmlFor='user_state'>State: </label>
              <input 
                id="user_state"
                value={user.user_state}
                type="text"
                onChange={handleTextChange}
                placeholder="User State"
              />
            </div>

            <div className="UserNewForm__container__form__inner__fields__group">
              <label htmlFor='photo'>Photo: </label>
              <input 
                id="photo"
                value={user.photo}
                type="text"
                onChange={handleTextChange}
                placeholder="User Photo URL"
              />
            </div>

            <div className="UserNewForm__container__form__inner__fields__groupAdmin">
              <label htmlFor='user_admin'>Admin: </label>
              <input 
                id="user_admin"
                checked={user.user_admin}
                type="checkbox"
                onChange={handleCheckboxChange}
              />
            </div>

          </div>
          <br />
          <div className="UserNewForm__container__submitButton">
            <input type="submit" />
          </div>
        </form>
        <div className="UserNewForm__container__backToLogin">
          Already a member? &nbsp;
          <Link to="/login" >
            Log In
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserNewForm;