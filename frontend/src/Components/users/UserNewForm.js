import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;
const navigate = useNavigate();

const UserNewForm = () => {

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

  // uid SERIAL PRIMARY KEY,
  // firstname TEXT,
  // lastname TEXT,
  // username TEXT UNIQUE NOT NULL,
  // user_password TEXT,
  // user_email TEXT,
  // user_admin BOOLEAN,
  // user_interests TEXT,
  // user_city TEXT,
  // user_state TEXT

  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    username: '',
    user_password: '',
    user_email: '',
    user_admin: '',
    user_interests: '',
    user_city: '',
    user_state: ''
  });

  return (
    <div className="UserNewForm">
      <form>
        <label htmlFor='firstname'>First Name:</label>
        <label htmlFor='lastname'>Last Name:</label>
        <label htmlFor='username'>Username:</label>
        <label htmlFor='user_password'>Password:</label>
        <label htmlFor='user_email'>Email:</label>
        <label htmlFor='user_admin'>Admin?:</label>
        <label htmlFor='user_interests'>Interests:</label>
        <label htmlFor='user_city'>City:</label>
        <label htmlFor='user_state'>State:</label>
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default UserNewForm;