import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Currencies from '../currencies/Currencies';

const API = process.env.REACT_APP_API_URL;

const UserDetails = () => {

    const [user, setUser] = useState([]);
    let { uid } = useParams();

    useEffect(() => {
        axios.get(`${API}/users/${uid}`)
            .then((res) => {
                setUser(res.data);
            }).catch((err) => {
                console.log(err);
            })
    })

    const { firstname, lastname, username, user_password, user_email, user_admin, user_interests, user_city, user_state } = user;


    return (
    <div className="userDetails">
        <div className="userDetails__editButton">
        <Link to={`/users/${user.uid}/edit`}>
            <button>Edit User</button>
        </Link>
        </div>
        <div className="userDetails__details">
            <h1>{firstname} {lastname}</h1>
            <div>
                First Name: {firstname}
            </div>
            <div>
                Last Name: {lastname}
            </div>
            <div>
                ID: {uid}
            </div>
            <div>
                Username: {username}
            </div>
            <div>
                Password: {user_password}
            </div>
            <div>
                Admin? {user_admin ? <span>Yes</span> : <span>No</span>}
            </div>
            <div>
                Interests: {user_interests}
            </div>
            <div>
                City: {user_city}
            </div>
            <div>
                State: {user_state}
            </div>
            <div>
                Email: {user_email}
            </div>
        </div>
        <Currencies />
    </div>
    )
}

export default UserDetails;