import React, { useState } from 'react';
import axios from 'axios';

import './Signup.scss';

const API = process.env.REACT_APP_API_URL;

// TODO: redirect user to a success/fail page
// Add Error handling: input must be (3 or more) characters for it to be added to mailchimp for lastName
const Signup = () => {
  // set hooks for each input field in form on backend
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  // submitting this form on the frontend posts to the backend, which posts the data to mailchimp. Users are stored in mailchimp account.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/signup`, { firstName, lastName, email });
      setFirstName("");
      setLastName("");
      setEmail("");
      // error handling
      if (!firstName || !lastName || !email){
        // error - alert user to fill out the form
        window.alert('unsuccessful')
      } else {
        // success - alert user that form was successfully submitted
        window.alert('successful')
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="Signup" action="/signup" onSubmit={handleSubmit}>
        <div className="inputFields">
		<input 
          type="text" 
          name="firstName" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
          placeholder="First Name"
		  className="firstName"
        />
        <input 
          type="text" 
          name="lastName" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
          placeholder="Last Name"
		  className="lastName"
        />
        <input 
          type="email" 
          name="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email" 
		  className="email"
        />
		</div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
