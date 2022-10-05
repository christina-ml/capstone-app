// login with react hooks
// https://stackoverflow.com/questions/71536244/check-username-password-login-form-using-react-hooks

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Users from '../users/Users';

const API = process.env.REACT_APP_API_URL;

const LoginRH = () => {
    // hooks
    const [users, setUsers] = useState([]);

    // -- USING AXIOS --
    useEffect(() => {   
    axios.get(API + "/users")
        .then((res) => {
            console.log("res.data:", res.data)
            setUsers(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    // fetch gives us the obj with all the `users` from backend
    // console.log("users:", users.map(user=>user.firstname))

      const [data, setData] = useState({
        username: '',
        password: ''
      });
      
      const changeHandler = (e) => {
        setData({...data, [e.target.name]: e.target.value})
      }
    
      // validate if user input matches the one in database
      const checkUser = () => {
        const usercheck = users.find(user => (user.username === data.username && user.password === data.password));
        if(usercheck) {
          console.log("Login successful");
        }else {
          console.log("Wrong password or username");
        }
        console.log("usercheck:", usercheck);
      }
    
    
    useEffect(() => {
    checkUser(users)
      }, [data.username, data.password])
    
      console.log("data:", data);

      return (
        <div>
          <div className="input-text">
                  <input
                    type="text"
                    name="username"
                    value={data.username}
                    placeholder="Username"
                    onChange={changeHandler}
                  />
              </div>
              <div className="input-text">
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  placeholder="Password"
                  onChange={changeHandler}
                />
                
              </div>
        </div>
      );
    }

export default LoginRH;