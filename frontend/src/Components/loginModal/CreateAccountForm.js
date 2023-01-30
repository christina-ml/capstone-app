import React, { useState } from "react";
import { Box, Checkbox, TextField, Typography } from "@mui/material";

import './CreateAccountForm.scss';

import Button from "../../cryptotalkComponents/buttons/Button";

const API = process.env.REACT_APP_API_URL;

const CreateAccountForm = ({ setOpenLoginModal, setLoggedIn }) => {
    // hooks for modal 
    // const [firstname, setFirstname] = useState('');
    // const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    // const [admin, setAdmin] = useState(false);
    // const [interests, setInterests] = useState('');
    // const [city, setCity] = useState('');
    // const [userState, setUserState] = useState('');
    // const [photo, setPhoto] = useState('');

    // hooks for errors
    const [usernameError, setUsernameError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    // VALIDATIONS
    // on unfocus validate username
    const validateUsername = () => {
        if(username.length <  4){
            setUsernameError(true);
        } else {
            setUsernameError(false);
        }
    }

    const validateEmail = () => {
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        setEmailError(false); 
        } else {
            setEmailError(true);
        }
    }
    
    const createUser = () => {
        const reqOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // firstname,
                // lastname,
                username,
                password,
                email,
                // admin,
                // interests,
                // city,
                // userState,
                // photo
            })
        };
        console.log("reqOptions:", reqOptions.body)

        console.log("should be localhost->", API + "/users")
        fetch(`${API}/users`, reqOptions)
            .then(response => response.json())
            .then(data => {
                // reset the hooks - reset our form to have all empty values
                // setFirstname("");
                // setLastname("");
                setUsername("");
                setPassword("");
                setEmail("");
                // setAdmin(false);
                // setInterests("");
                // setCity("");
                // setUserState("");
                // setPhoto("");

                // close our modal
                setOpenLoginModal(false);

                // show toast that user was successfully created
                
                console.log("LoginModaldata:", data);
                localStorage.setItem("accessToken", data.accessToken);
                setLoggedIn(true);
            }).catch((error) => {
                // handle error
                console.error(error);
            });
    };

    return (
        <Box
            component="form"
            sx={{
            '& .MuiTextField-root': { my: 1, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Typography
                className="LoginModal__title"
                id="modal-modal-title"
                variant="h6"
                component="h2"
            >
                Please Create An Account
            </Typography>
            {/* <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                onChange={(e) => setFirstname(e.target.value)}
                value={firstname}
            />
            <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
            /> */}
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
                label="Email"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                onBlur={validateEmail}
                error={emailError}
                helperText={emailError && "Email must be at least 4 characters long."}
            />
            <TextField
                id="outlined-basic"
                label="Password"
                type="password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            {/* Admin: 
            <Checkbox
                onChange={(e) => setAdmin(e.target.checked)}
                checked={admin}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <TextField
                id="outlined-basic"
                label="Interests"
                variant="outlined"
                onChange={(e) => setInterests(e.target.value)}
                value={interests}
            />
            <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
                onChange={(e) => setCity(e.target.value)}
                value={city}
            />
            <TextField
                id="outlined-basic"
                label="User State"
                variant="outlined"
                onChange={(e) => setUserState(e.target.value)}
                value={userState}
            />
            <TextField
                id="outlined-basic"
                label="Photo"
                variant="outlined"
                onChange={(e) => setPhoto(e.target.value)}
                value={photo}
            /> */}
            <Button onClick={createUser} buttonText="Submit" />
        </Box>
    );
};

export default CreateAccountForm;
