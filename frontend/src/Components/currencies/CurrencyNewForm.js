import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "./CurrencyNewForm.scss";

const API = process.env.REACT_APP_API_URL;

function CurrencyNewForm() {
  let navigate = useNavigate();

  const addCurrency = (newCoin) => {
    axios
      .post(`${API}/currencies`, newCoin)
      .then(
        () => {
          navigate('/currencies');
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [user, setUser] = useState({
    firstname: '',
    cid: '',
    coinmarketcap_id: '',
    name: '',
    symbol: '',
    logo: '',
    slug: '',
    num_market_pairs: '',
    date_added: '',
    tags: '',
    max_supply: '',
    circulating_supply: '',
    total_supply: '',
    token_address: '',
    cmc_rank: '',
    self_reported_circulating_supply: '',
    self_reported_market_cap: '',
    tvl_ratio: '',
    last_updated: '',
    price: '',
    volume_24h: '',
    volume_change_24h: '',
    percent_change_1h: '',
    percent_change_24h: '',
    percent_change_7d: '',
    percent_change_30d: '',
    percent_change_60d: '',
    percent_change_90d: '',
    market_cap: '',
    market_cap_dominance: '',
    fully_diluted_market_cap: '',
    tvl: '',
    currency_uid: ''
  });


  const handleTextChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addCurrency(user);
    navigate(`/currencies`);
  }

  return (
    <div className="CurrencyNewForm">
      <div className="CurrencyNewForm__container">
        <form className="CurrencyNewForm__container__form" onSubmit={handleSubmit}>
          <div className="CurrencyNewForm__container__form__inner">
            <h2>Sign Up</h2>
          </div>
          <div className="CurrencyNewForm__container__form__inner__fields">
            <div className="CurrencyNewForm__container__form__inner__fields__group">
              <label htmlFor='firstname'>First Name: </label>
              <input 
                id="firstname"
                value={user.firstname}
                type="text"
                onChange={handleTextChange}
                placeholder="First Name"
              />
            </div>

            <div className="CurrencyNewForm__container__form__inner__fields__group">
              <label htmlFor='lastname'>Last Name: </label>
              <input 
                id="lastname"
                value={user.lastname}
                type="text"
                onChange={handleTextChange}
                placeholder="Last Name"
              />        
            </div>

            <div className="CurrencyNewForm__container__form__inner__fields__group">
              <label htmlFor='username'>Username: </label>
              <input 
                id="username"
                value={user.username}
                type="text"
                onChange={handleTextChange}
                placeholder="Username"
              />
            </div>

            <div className="CurrencyNewForm__container__form__inner__fields__group">
              <label htmlFor='user_password'>Password: </label>
              <input 
                id="user_password"
                value={user.user_password}
                type="text"
                onChange={handleTextChange}
                placeholder="Password"
              />
            </div>

            <div className="CurrencyNewForm__container__form__inner__fields__group">
              <label htmlFor='user_email'>Email: </label>
              <input 
                id="user_email"
                value={user.user_email}
                type="text"
                onChange={handleTextChange}
                placeholder="User Email"
              />
            </div>

            <div className="CurrencyNewForm__container__form__inner__fields__group">
              <label htmlFor='user_interests'>Interests: </label>
              <input 
                id="user_interests"
                value={user.user_interests}
                type="text"
                onChange={handleTextChange}
                placeholder="User Interests"
              />
            </div>

            <div className="CurrencyNewForm__container__form__inner__fields__group">
              <label htmlFor='user_city'>City: </label>
              <input 
                id="user_city"
                value={user.user_city}
                type="text"
                onChange={handleTextChange}
                placeholder="User City"
              />
            </div>

            <div className="CurrencyNewForm__container__form__inner__fields__group">
              <label htmlFor='user_state'>State: </label>
              <input 
                id="user_state"
                value={user.user_state}
                type="text"
                onChange={handleTextChange}
                placeholder="User State"
              />
            </div>

            <div className="CurrencyNewForm__container__form__inner__fields__group">
              <label htmlFor='photo'>Photo: </label>
              <input 
                id="photo"
                value={user.photo}
                type="text"
                onChange={handleTextChange}
                placeholder="User Photo URL"
              />
            </div>

          </div>
          <br />
          <div className="CurrencyNewForm__container__submitButton">
            <input type="submit" />
          </div>
        </form>
        <div className="CurrencyNewForm__container__backToLogin">
          Already a member? &nbsp;
          <Link to="/login" >
            Log In
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CurrencyNewForm;