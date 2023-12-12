import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './UserDetails.scss';

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
    }, [API, uid])

    const { firstname, lastname, username, user_password, user_email, user_admin, user_interests, user_city, user_state, photo } = user;

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
    <div className="userDetails">
        <div className="userDetails__profile">
            <div className="userDetails__profile__header">
                <div className="userDetails__profile__header__name">
                    {(firstname || lastname) ? `${firstname} ${lastname || ''}` : `${username}`}
                </div>
                <div className="userDetails__profile__header__editAndAdd">
                    <Link to={`/users/${user.uid}/edit`}>
                        <button>Edit</button>
                    </Link>
                    <button>Add a coin</button>
                </div>
            </div>
            <div className="userDetails__profile__bio">
                <div className="userDetails__profile__bio__leftSide">
                    <div className="userDetails__profile__bio__leftSide__profilePhoto">
                        <img src={photo} alt="profile avatar" />
                    </div>
                    <div>
                        {firstname} {lastname}
                        {user_admin ? <span> &nbsp; <IoSettingsSharp /> Admin</span> : <span></span>}
                    </div>
                    <div>
                        Username: {username}
                    </div>
                </div>
                <div className="userDetails__profile__bio__rightSide">
                    <div>
                        CryptoTalk ID #: {user.uid}
                    </div>
                    <div className="userDetails__profile__bio__rightSide__hideShowPassword">
                        { showPassword ? 
                            <span> {user_password.slice(0,6)} </span> :
                            <span> ********** </span>
                        }
                        { showPassword ? 
                            <button onClick={handleShowPassword}>hide password hint</button> :
                            <button onClick={handleShowPassword}>show password hint</button>
                        }
                    </div>
                    <div>
                        <MdOutlineEmail /> {user_email}
                    </div>
                    <div>
                        <IoHomeOutline /> {user_city || 'Washington'}{(user_city && user_state) ? ', ' : '' }{user_state || ', USA'}
                    </div>
                    <div>
                        Interests: {user_interests || 'CryptoTalk'}
                    </div>
                </div>
            </div>
        </div>
        <div className="userDetails__userCurrencies">
            <Currencies />
        </div>
    </div>
    )
}

export default UserDetails;