import React, { useState } from 'react';

// this is just for creating the correct scss
import './SignupDisplay.scss';

function Signup() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
        <form className="Signup" onSubmit={handleSubmit}>
            <div className="firstAndLastNames">
              <input 
                id="firstname"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div>
              <input 
                id="firstname"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <input 
                id="email_address"
                type="text"
                placeholder="Email"
              />
            </div>
            <div>
              <button type="submit">Subscribe here</button>
            </div>
        </form>
  )
}

export default Signup;