import React from 'react';
import './LoginModal.scss';

// Material UI imports
import Modal from '@mui/material/Modal';
import { Tab, Tabs } from '@mui/material';
import Stack from '@mui/material/Stack';

// Components inside TabPanels
import LoginAccountForm from './LoginAccountForm';
import CreateAccountForm from './CreateAccountForm';

// Tab panel and a11y props from Material UI
// https://mui.com/material-ui/react-tabs/
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
            <>{children}</>
        )}
      </div>
    );
}

// MUI's code had this too:
// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}

/**
 * Login Modal is not going to have a route - it will be available on every page
 */

const LoginModal = ({ openLoginModal, setOpenLoginModal, setLoggedIn, setLoginMessage, ...props }) => {
    // for `LoginModal()` tabs
    const [value, setValue] = React.useState(0);

    // style the MUI modal
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        width: '30ch'
    };

    // open or close modal
    const handleClose = () => {
        setOpenLoginModal(false);
    }

    // MUI's `handleChange` function:
    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    // handle change tabs
    const handleChange = (e) => {
        console.log("handleChange-value:", e.target.id, e.target.id.length-1)
        setValue(Number(e.target.id[e.target.id.length-1]))
    }

    return (
        <Modal 
            className="LoginModal"
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
                <Tabs value={value} onChange={handleChange} aria-label="Log in and create account tabs">
                    <Tab label="Log In" {...a11yProps(0)} />
                    <Tab label="Create Account" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <LoginAccountForm
                        setOpenLoginModal={setOpenLoginModal} 
                        setLoggedIn={setLoggedIn}
                        setLoginMessage={setLoginMessage}
                    />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <CreateAccountForm
                        setOpenLoginModal={setOpenLoginModal} 
                        setLoggedIn={setLoggedIn}
                        setLoginMessage={setLoginMessage}
                    />
                </TabPanel>
            </Stack>
        </Modal>
    )
}

export default LoginModal;