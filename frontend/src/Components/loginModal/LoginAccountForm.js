import React, {useState} from 'react';

import './LoginAccountForm.scss';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import Button from '../../cryptotalkComponents/buttons/Button';

const API = process.env.REACT_APP_API_URL;

const LoginAccountForm = ({setOpenLoginModal, setLoggedIn}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const [usernameError, setUsernameError] = useState(false);
    const [formMessage, setFormMessage] = useState('');

    // on unfocus validate username
    const validateUsername = () => {
        if(username.length <  4){
            setUsernameError(true);
        } else {
            setUsernameError(false);
        }
    }

    // when user clicks th button to log in
    const logInUser = () => {
        // handle login

        const reqOptions = {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username, 
                password
            })
        }
     
        console.log("reqOptions on LoginAccountForm:", reqOptions)

        // fetch to our login route
        fetch(`${API}/users/login`, reqOptions)
        .then(response => response.json())
        .then(data => {

            console.log("data from LoginAccountForm:", data);
            // set our hooks back to make form empty
            setUsername('');
            setPassword('');
            setOpenLoginModal(false);

            // show toast that user was successfully logged in 
            
            // save token to local storage
            localStorage.setItem('accessToken', data.accessToken);
            
            // set loggedin to true 
            setLoggedIn(true);
            
        }).catch(error => {
            // might want an error message saying it didnt work - server's down, etc.
            console.log(error);
        })
    }

    return (
        <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { my: 1, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Typography className="loginModal__title" id="modal-modal-title" variant="h6" component="h2">
                Please Log In
            </Typography>
             <TextField 
                id="outlined-basic" 
                label="Username" 
                variant="outlined" 
                required
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                onBlur={validateUsername}
                error={usernameError}
                helperText={usernameError && "Username must be at least 4 characters long."}
            />
            <TextField 
                id="outlined-basic" 
                label="Password" 
                type="password" 
                variant="outlined"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <Button onClick={logInUser} buttonText="Log In" />
        </Box>
  )
}

export default LoginAccountForm;