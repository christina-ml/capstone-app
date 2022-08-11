import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

function UserEditForm() {
  let navigate = useNavigate();
  let { uid } = useParams();

  const updateUser = (updatedUser) => {
    axios
      .put(`${API}/users/${uid}`, updatedUser)
      .then(
        () => {
          navigate(`/users/${uid}`);
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
    user_state: ''
  });

  const handleTextChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  }

  const handleCheckboxChange = () => {
    setUser({ ...user, user_admin: !user.user_admin });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(user, uid);
  }

  useEffect(() => {
    axios.get(`${API}/users/${uid}`)
      .then(
        (response) => setUser(response.data),
        (error) => navigate(`/not-found`)
      );
  }, [uid, navigate]);

  return (
    <div className="UserEditForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor='firstname'>First Name:</label>
        <input 
          id="firstname"
          value={user.firstname}
          type="text"
          onChange={handleTextChange}
          placeholder="First Name"
        />

        <label htmlFor='lastname'>Last Name:</label>
        <input 
          id="lastname"
          value={user.lastname}
          type="text"
          onChange={handleTextChange}
          placeholder="Last Name"
        />        

        <label htmlFor='username'>Username:</label>
        <input 
          id="username"
          value={user.username}
          type="text"
          onChange={handleTextChange}
          placeholder="Username"
        />

        <label htmlFor='user_password'>Password:</label>
        <input 
          id="user_password"
          value={user.user_password}
          type="text"
          onChange={handleTextChange}
          placeholder="Password"
        />

        <label htmlFor='user_email'>Email:</label>
        <input 
          id="user_email"
          value={user.user_email}
          type="text"
          onChange={handleTextChange}
          placeholder="User Email"
        />

        <label htmlFor='user_admin'>Admin?:</label>
        <input 
          id="user_admin"
          checked={user.user_admin}
          type="checkbox"
          onChange={handleCheckboxChange}
        />

        <label htmlFor='user_interests'>Interests:</label>
        <input 
          id="user_interests"
          value={user.user_interests}
          type="text"
          onChange={handleTextChange}
          placeholder="User Interests"
        />

        <label htmlFor='user_city'>City:</label>
        <input 
          id="user_city"
          value={user.user_city}
          type="text"
          onChange={handleTextChange}
          placeholder="User City"
        />

        <label htmlFor='user_state'>State:</label>
        <input 
          id="user_state"
          value={user.user_state}
          type="text"
          onChange={handleTextChange}
          placeholder="User State"
        />

        <br />
        <input type="submit" />
      </form>

      <Link to={`/users/${uid}`}>
        <button>Cancel Edit</button>
      </Link>
    </div>
  )
}

export default UserEditForm;