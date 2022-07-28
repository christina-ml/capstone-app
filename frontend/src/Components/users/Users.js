import React, { useEffect, useState } from 'react';
import axios from "axios";

import "./Users.scss";

// Components
import User from './User';

const API = process.env.REACT_APP_API_URL;

const Users = () => {
    // hooks
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(API + "/users")
            .then((res) => {
                // console.log(res.data)
                setUsers(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }, []);

  return (
    <div className="Users">
        <h1>Users Page</h1>
        <div>
            {users.map((user) => {
                return <User key={user.uid} user={user} />
            })}
        </div>

    </div>
  )
}

export default Users;