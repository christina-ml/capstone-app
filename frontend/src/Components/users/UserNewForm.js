import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Material UI - for username availability
import Alert from '@mui/material/Alert';

import "./UserNewForm.scss";

// buttons
import InputButton from '../../cryptotalkComponents/buttons/InputButton';
import Button from '../../cryptotalkComponents/buttons/Button';

const API = process.env.REACT_APP_API_URL;

function UserNewForm() {
  let navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState('');
  const [alreadyFound, setAlreadyFound] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      axios
        .post(`${API}/users`, user)
        .then(
          () => {
            navigate('/users');
          },
          (error) => {
            // if POST request fails, user exists in database already.
            // add users input of already found username into `alreadyFound` array to keep track of all usernames this user has attempted to make a user profile with.
            setAlreadyFound((alreadyFound) => [...alreadyFound, user.username]);
            setErrorMsg(`Username already exists.`);
          }
        )
        .catch((c) => {
          console.warn("catch", c)
        });
    } catch (err){
      
      console.log(err);
    }
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
    setErrorMsg('');
    // if usernames have already been found and are in alreadyFound array; if current text input matches anything in array - set error.
    if (alreadyFound.includes(event.target.value)){
      setErrorMsg('You tried this existing username already.');
    }

    setUser({ ...user, [event.target.id]: event.target.value });
  }

  const handleCheckboxChange = () => {
    setUser({ ...user, user_admin: !user.user_admin });
  }

  // redirect to users login page
  const handleGoToLoginPage = (event) => {
    event.preventDefault();
    navigate(`/login`);
  }

  return (
    <div className="UserNewForm">
      <div className="UserNewForm__container">
        <form className="UserNewForm__container__form" onSubmit={handleSubmit}>
          <div className="UserNewForm__container__form__inner">
            <h2>Sign Up</h2>
          </div>
            {
              (errorMsg !== '') ?
              <Alert severity="error">Error — {errorMsg}</Alert>
              :
              <div>
                { alreadyFound.length > 0 ?
                  // if user types in a username that isn't in the alreadyFound array, and isn't the first attempt.
                  <Alert severity="success">Username Available</Alert> : 
                  // if no existing usernames have been found yet, show nothing.
                  <></>
                }
              </div>
            }
          <div className="UserNewForm__container__form__inner__fields">
            <div className="UserNewForm__container__form__inner__fields__group">
              <label htmlFor='firstname'>First Name:</label>
              <input 
                id="firstname"
                value={user.firstname}
                type="text"
                onChange={handleTextChange}
                placeholder="First Name"
              />
            </div>

            <div className="UserNewForm__container__form__inner__fields__group">
              <label htmlFor='lastname'>Last Name:</label>
              <input 
                id="lastname"
                value={user.lastname}
                type="text"
                onChange={handleTextChange}
                placeholder="Last Name"
              />        
            </div>

            <div className="UserNewForm__container__form__inner__fields__group">
              <label htmlFor='username'>Username*:</label>
              <input 
                id="username"
                value={user.username}
                type="text"
                onChange={handleTextChange}
                placeholder="Username"
                required
              />
            </div>

            <div className="UserNewForm__container__form__inner__fields__group">
              <label htmlFor='user_password'>Password:</label>
              <input 
                id="user_password"
                value={user.user_password}
                type="text"
                onChange={handleTextChange}
                placeholder="Password"
              />
            </div>

            <div className="UserNewForm__container__form__inner__fields__group">
              <label htmlFor='user_email'>Email:</label>
              <input 
                id="user_email"
                value={user.user_email}
                type="text"
                onChange={handleTextChange}
                placeholder="User Email"
              />
            </div>

            <div className="UserNewForm__container__form__inner__fields__group">
              <label htmlFor='user_interests'>Interests:</label>
              <input 
                id="user_interests"
                value={user.user_interests}
                type="text"
                onChange={handleTextChange}
                placeholder="User Interests"
              />
            </div>

            <div className="UserNewForm__container__form__inner__fields__group">
              <label htmlFor='user_city'>City:</label>
              <input 
                id="user_city"
                value={user.user_city}
                type="text"
                onChange={handleTextChange}
                placeholder="User City"
              />
            </div>

            <div className="UserNewForm__container__form__inner__fields__group">
              <label htmlFor='user_state'>State:</label>
              <input 
                id="user_state"
                value={user.user_state}
                type="text"
                onChange={handleTextChange}
                placeholder="User State"
              />
            </div>

            <div className="UserNewForm__container__form__inner__fields__group">
              <label htmlFor='photo'>Photo:</label>
              <input 
                id="photo"
                value={user.photo}
                type="text"
                onChange={handleTextChange}
                placeholder="User Photo URL"
              />
            </div>

            <div className="UserNewForm__container__form__inner__fields__groupAdmin">
              <label htmlFor='user_admin'>Admin:</label>
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
            <InputButton type="submit" />
          </div>
        </form>

        <div className="UserNewForm__container__backToLogin">
          <span>Already a member?</span>
          <Button onClick={handleGoToLoginPage} buttonText='Log In' />
        </div>

      </div>
    </div>
  )
}

export default UserNewForm;