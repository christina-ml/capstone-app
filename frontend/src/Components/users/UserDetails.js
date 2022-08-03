import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

    const { firstname, lastname, username, user_password, user_email, user_active, user_interests, user_city, user_state } = user;


    return (
    <div className="userDetails">
        UserDetails - Everything about a user
        <div>
            <h1>{firstname} {lastname}</h1>
            </div>
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
                Active? {user_active ? <span>Yes</span> : <span>No</span>}
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
    )
}

export default UserDetails;