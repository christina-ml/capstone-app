import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Currency from './Currency';
import './Currencies.scss';

const API = process.env.REACT_APP_API_URL;

const Currencies = () => {
    const [allCurrencies, setAllCurrencies] = useState([]);
    const { uid } = useParams();

    useEffect(() => {
        // http://localhost:3333/users/2/currencies
        axios.get(`${API}/users/${uid}/currencies`)
            .then((res) => {
                setAllCurrencies(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }, [API, uid]);

    // console.log("allCurrencies:", allCurrencies);

    // ======== TAGS =======
    const [oneUserWithTags, setOneUserWithTags] = useState([]);
    const [allTags, setAllTags] = useState([]);
    let { cid } = useParams();

    // get one user's currencies' currency details
    useEffect(() => {
        axios.get(`${API}/users/${uid}/currencies?include=tags`)
            .then((res) => {
                setOneUserWithTags(res.data);
                setAllTags(res.data.tags)
            }).catch((err) => {
                console.log(err);
            })
    }, [API, cid])

    // console.log("oneUserWithTags:", oneUserWithTags)
    // console.log("allTags:", allTags)
    // ======== TAGS =======

    return (
        <div className="currencies">
            {oneUserWithTags.map((currency, index) => {
                return (
                    <Currency currency={currency} 
                        key={"currency" + index} 
                        // oneUserWithTags={oneUserWithTags}
                        allTags={allTags}
                    />
                )
            })}
        </div>
    );
}

export default Currencies;