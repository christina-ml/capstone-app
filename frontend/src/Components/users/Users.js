import React, { useEffect, useState } from 'react';
import axios from "axios";

import "./Users.scss";

// Components
import User from './User';
import SearchBar from '../searchBar/SearchBar';

const API = process.env.REACT_APP_API_URL;

const Users = () => {
    // hooks
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // for searchBar


    let filteredUsers = users;
    if (searchTerm){
        filteredUsers = users.filter((user) => {
            const fullName = `${user.firstname} ${user.lastname}`;
            const fullNameToLowerCase = fullName.toLowerCase();
            const searchTermToLowerCase = searchTerm.toLowerCase();
            // if the search term is included in the full name (lowercased)
            return fullNameToLowerCase.includes(searchTermToLowerCase);
        })
    }
  

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
    <div className="users">
        <h1>Users Page</h1>
        <div>

            <input className="users__search" placeholder="Search by name" />

            {/* <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
            {users.map((user) => {
                return <User key={user.uid} user={user} />
            })}
        </div>

    </div>
  )
}

export default Users;