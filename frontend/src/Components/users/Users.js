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
  
    // -- USING FETCH --
    // useEffect(() => {
    //     // const url = "http://localhost:3333/users"
    //     const url = `${API}/users`
    //     // reach out to the backend
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log("data:", data)
    //         setUsers(data);
    //     })
    //     // get our users
    //     // update our users hook with the new data
    // }, []); // empty array means run on mount

    // -- USING AXIOS --
    useEffect(() => {
        axios.get(API + "/users")
            .then((res) => {
                setUsers(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }, [API]);

    // when search term is updated, this component will re-render
    // what to do on a re-render?
    // check if full name includes the search term (if there is a searchTerm)
    let filteredUsers = users;
    if (searchTerm){
        filteredUsers = users.filter(user => {
            const fullName = `${user.firstname} ${user.lastname}`;
            const fullNameToLowerCase = fullName.toLowerCase();
            const searchTermToLowerCase = searchTerm.toLowerCase();
            return fullNameToLowerCase.includes(searchTermToLowerCase);
        })
    }

  return (
    <div className="users">
        <div className="users__heading">
            <h1>Users</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} placeholder={'Search by name'}/>
        </div>
        <div className="users__cardsContainer">
            {filteredUsers.map(user => {
                return (
                    <User user={user} />
                )
            })}
        </div>

        {filteredUsers.length === 0 && <div className="users__noResults">No Results </div>}
    </div>
  )
}

export default Users;