import { TroubleshootTwoTone } from "@mui/icons-material";
import { Box, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "../../cryptotalkComponents/buttons/Button";

const API = process.env.REACT_APP_API_URL;

const CreateAccountForm = ({ setOpenLoginModal, setLoggedIn }) => {
    // hooks for modal
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // hooks for errors
    // const [usernameError, setUsernameError] = useState(false);
    // const [emailError, setEmailError] = useState(false);

    // VALIDATIONS
    // on unfocus validate username
    // const validateUsername = () => {
    //     if (username.length < 2){
    //         setUsernameError(true);
    //     }
    //     setUsernameError(false);
    // }
    // const validateEmail = () => {
    //     if (email.length > 2){
    //         setEmailError(false);
    //     }
    //     setEmailError(true);
    // }

    
    const createUser = () => {
        const reqOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                email,
                password,
            })
        };

        fetch(API + "/users", reqOptions)
            .then((res) => res.json())
            .then((data) => {
                // reset the hooks
                setEmail("");
                setUsername("");
                setPassword("");
                setOpenLoginModal(false);

                // show toast that user was successfully created
                
                console.log("LoginModaldata:", data);
                localStorage.setItem("accessToken", data.accessToken);
                setLoggedIn(true);
            })
            .catch((error) => {
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
            <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                required
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                // onBlur={validateUsername}
                // error={usernameError}
                // helperText={usernameError && "Username must be at least 2 characters long."}
            />
            <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                // onBlur={validateEmail}
                // error={emailError}
                // helperText={emailError && "Email must be at least 2 characters long."}
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
            <Button onClick={createUser} buttonText="Submit" />
        </Box>
    );
};

export default CreateAccountForm;
