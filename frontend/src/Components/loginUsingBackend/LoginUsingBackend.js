// Register and Login Page Tutorial (using backend)
// https://www.youtube.com/watch?v=W-sZo6Gtx_E

import React, { useState } from 'react';

import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

const LoginUsingBackend = () => {

    // for register
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    // for login
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('');

    // register
    const register = () => {
        axios.post(API + "/register", {
            username: usernameReg,
            password: passwordReg,
        }).then((res) => {
            console.log(res);
        });
    }

    // login
    const login = () => {
        axios.post(API + "/login", {
            username: username,
            password: password,
        }).then((res) => {

            if (res.data.message){
                setLoginStatus(res.data.message)
            } else {
                setLoginStatus(res.data[0].username)
            }
            // console.log(res.data);
        });
    }


// -- USING AXIOS --
// useEffect(() => {   
//     axios.get(API + "/users")
//         .then((res) => {
//             console.log("res.data:", res.data)
//             setUsers(res.data);
//         }).catch((err) => {
//             console.log(err);
//         })
//     }, []);


  return (
    <div>
        <div className="registration">
            <h1>Registration</h1>
            <label>Username</label>
            <input type="text" 
                    onChange={(e) => {
                        setUsernameReg(e.target.value)
                    }}
            />

            <label>Password</label>
            <input type="text" 
                    onChange={(e) => {
                        setPasswordReg(e.target.value)
                    }}
            />

            <button onClick={register}> 
                Register 
            </button>
        </div>


        <div className="login">
            <h1>Login</h1>
            <input type="text" 
                placeholder="username"
                onChange={(e) => {
                    setUsername(e.target.value)
                }}
            />
            <input type="password" 
                placeholder="password"
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
            />
            <button onClick={login}>
                Login
            </button>
        </div>

        <h1>{loginStatus}</h1>

    </div>
  )
}

export default LoginUsingBackend;