import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Currencies from '../currencies/Currencies';

// react icons
import { MdOutlineEmail } from 'react-icons/md';
import { IoSettingsSharp, IoHomeOutline } from 'react-icons/io5';


const API = process.env.REACT_APP_API_URL;

const UserDetails = () => {

    const [user, setUser] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    let { uid } = useParams();

    useEffect(() => {
        axios.get(`${API}/users/${uid}`)
            .then((res) => {
                setUser(res.data);
            }).catch((err) => {
                console.log(err);
            })
    })

    const { firstname, lastname, username, user_password, user_email, user_admin, user_interests, user_city, user_state, photo } = user;

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
    <div className="userDetails">
        <div className="userDetails__editButton">
        <Link to={`/users/${user.uid}/edit`}>
            <button>Edit</button>
        </Link>
        </div>
        <div className="userDetails__details">
            <div className="userDetails__details__name">
                <div>{firstname} {lastname}</div>
            </div>
            <div className="userDetails__details__bio">
                <div className="userDetails__details__bio__profilePhoto">
                    <img src={photo} alt="profile photo" />
                </div>
                <div>
                    {firstname} {lastname}
                    {user_admin ? <span> &nbsp; <IoSettingsSharp /> Admin</span> : <span></span>}
                </div>
                <div>
                    {username}
                </div>
                <div>
                     
                    { showPassword ? 
                        <span> {user_password} </span> :
                        <span> ********** </span>
                    }
                    { showPassword ? 
                        <button onClick={handleShowPassword}>hide password</button> :
                        <button onClick={handleShowPassword}>show password</button>
                    }
                </div>
                <div>
                    CryptoTalk ID #: {user.uid}
                </div>
                <div>
                    <MdOutlineEmail /> {user_email}
                </div>
                <div>
                    <IoHomeOutline /> {user_city}, {user_state}
                </div>
                <div>
                    Interests: {user_interests}
                </div>
            </div>
        </div>
        <Currencies />
    </div>
    )
}

export default UserDetails;