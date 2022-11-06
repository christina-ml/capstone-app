import React, { useState } from 'react';

import './NewSubscriberForm.scss';

function NewSubscriberForm() {
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setConfirmed(true);
    setTimeout(() => {
      setConfirmed(false);
    }, 3000)
  }

  return (
        <form className="NewSubscriberForm" onSubmit={handleSubmit}>
            {confirmed ? 
              <span className="NewSubscriberForm__confirmText">Thanks for subscribing!</span> :
              <span></span>
             }
            <input 
              id="email_address"
              type="text"
              placeholder="Your email"
            />
            <button type="submit">Subscribe</button>
        </form>
  )
}

export default NewSubscriberForm;