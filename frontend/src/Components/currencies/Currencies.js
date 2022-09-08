import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Currency from './Currency';
import './Currencies.scss';

const API = process.env.REACT_APP_API_URL;

const Currencies = () => {
    const [currencies, setCurrencies] = useState([]);
    let { uid } = useParams();

    useEffect(() => {
        axios.get(`${API}/users/${uid}/currencies`)
            .then((res) => {
                console.log("res.data:", res.data)
                setCurrencies(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }, [uid]);


    return (
        <div className="currencies">
            {currencies.map((currency) => {
                return (
                    <Currency currency={currency} />
                )
            })}
        </div>
    );
}

export default Currencies;