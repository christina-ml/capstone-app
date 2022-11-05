import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import "./Users.scss";

const API = process.env.REACT_APP_API_URL;

function UserEditForm() {

  // ask before deleting user
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

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

  const handleDelete = () => {
    axios.delete(`${API}/users/${uid}`)
    .then((res) => {
        navigate("/users")
    }).catch((err) => {
        console.log(err);
    })
  }

  // ask before deleting user
  const askBeforeDeleting = () => {
    setShowConfirmDelete(true);
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
      <div className="UserEditForm__container">

        <form className="UserEditForm__container__form" onSubmit={handleSubmit}>
          <div className="UserEditForm__container__form__inner">
            <h2>Edit User</h2>
          </div>
          
          <div className="UserEditForm__container__form__inner__fields">
            <div className="UserEditForm__container__form__inner__fields__group">
              <label htmlFor='firstname'>First Name:</label>
              <input 
                id="firstname"
                value={user.firstname}
                type="text"
                onChange={handleTextChange}
                placeholder="First Name"
              />
            </div>

            <div className="UserEditForm__container__form__inner__fields__group">
              <label htmlFor='lastname'>Last Name:</label>
              <input 
                id="lastname"
                value={user.lastname}
                type="text"
                onChange={handleTextChange}
                placeholder="Last Name"
              />        
            </div>

            <div className="UserEditForm__container__form__inner__fields__group">
              <label htmlFor='username'>Username:</label>
              <input 
                id="username"
                value={user.username}
                type="text"
                onChange={handleTextChange}
                placeholder="Username"
              />
            </div>

            <div className="UserEditForm__container__form__inner__fields__group">
              <label htmlFor='user_password'>Password:</label>
              <input 
                id="user_password"
                value={user.user_password}
                type="text"
                onChange={handleTextChange}
                placeholder="Password"
              />
            </div>

            <div className="UserEditForm__container__form__inner__fields__group">
              <label htmlFor='user_email'>Email:</label>
              <input 
                id="user_email"
                value={user.user_email}
                type="text"
                onChange={handleTextChange}
                placeholder="User Email"
              />
            </div>

            <div className="UserEditForm__container__form__inner__fields__groupAdmin">
              <label htmlFor='user_admin'>Admin?:</label>
              <input 
                id="user_admin"
                checked={user.user_admin}
                type="checkbox"
                onChange={handleCheckboxChange}
              />
            </div>

            <div className="UserEditForm__container__form__inner__fields__group">
              <label htmlFor='user_interests'>Interests:</label>
              <input 
                id="user_interests"
                value={user.user_interests}
                type="text"
                onChange={handleTextChange}
                placeholder="User Interests"
              />
            </div>

            <div className="UserEditForm__container__form__inner__fields__group">
              <label htmlFor='user_city'>City:</label>
              <input 
                id="user_city"
                value={user.user_city}
                type="text"
                onChange={handleTextChange}
                placeholder="User City"
              />
            </div>

            <div className="UserEditForm__container__form__inner__fields__group">
              <label htmlFor='user_state'>State:</label>
              <input 
                id="user_state"
                value={user.user_state}
                type="text"
                onChange={handleTextChange}
                placeholder="User State"
              />
            </div>

          </div>
          <br />
          <div className="UserEditForm__container__submitButton">
            <input type="submit" />
          </div>
        </form>

        <div className="UserEditForm__container__cancelEditOrDelete">
          {/* confirm before deleting user */}
          {showConfirmDelete ? 
            <div className="UserEditForm__container__cancelEditOrDelete__confirmDeleteAsk">
              <p>Are you sure you want to delete this user?</p>
              <Link to={`/users/${uid}`}>
                <button>Cancel</button>
              </Link>
              <button onClick={handleDelete}>Yes</button>
            </div>
            :
            <div className="UserEditForm__container__cancelEditOrDelete__confirmDelete">
              <Link to={`/users/${uid}`}>
                <button>Cancel</button>
              </Link>
              <button onClick={askBeforeDeleting}>Delete User</button>
            </div>
          }
        </div>

      </div>
    </div>
  )
}

export default UserEditForm;