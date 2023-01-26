import React, { useState } from 'react';
import './LoginModal.scss';

// Material UI imports
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';

/**
 * Login Modal is not going to have a route - it will be available on every page
 */

const LoginModal = ({ openLoginModal, setOpenLoginModal }) => {

    // hooks for modal
    const handleClose = () => {
        setOpenLoginModal(false);
    }

    // style the MUI modal
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        width: '25ch'
    };

    // firstname
    // lastname
    // username
    // email
    // password

    // hooks
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleClose = () => {
    //     setOpenLoginModal(false);
    // }

    

    // const API = process.env.REACT_APP_API_URL;

    // const createUser = () => {
    //     const reqOptions = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             username,
    //             email,
    //             password
    //         })
    //     }

    //     fetch(API + "/users", reqOptions)
    //         .then(res => res.json())
    //         .then(data => {
                
    //             setEmail('');
    //             setUsername('');
    //             setPassword('');
    //             setOpenLoginModal(false)

    //             // show toast that user was successfully created
    //         }).catch(error => {
    //             // handle error
    //             console.error(error);
    //         })
    // }

    return (
        <Modal className="LoginModal"
            open={openLoginModal} // what we want to use (from state)
            // open={true} // keeping open while creating text fields/scss
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Stack
                component="form"
                sx={style}
                spacing={2}
                noValidate
                autoComplete="off"
            >
                <Typography className="LoginModal__title" id="modal-modal-title" variant="h6" component="h2">
                    Please Create An Account
                </Typography>
                <TextField id="outlined-basic" label="First Name" variant="outlined" />
                <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                <TextField id="outlined-basic" label="Username" variant="outlined" required />
                <TextField id="outlined-basic" label="Email" variant="outlined" required />
                <TextField id="outlined-basic" label="Password" variant="outlined" required />
            </Stack>
        </Modal>
    )
}

export default LoginModal;