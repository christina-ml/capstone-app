import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// SCSS
import './App.scss';

// Cookies
import { getCookie } from "./utils/cookieUtils";

// Local Storage
import useLocalStorage from 'use-local-storage';

// Material UI
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

// react-icons
import { MdDarkMode } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';

// Component - resets the Scroll location to the Top of page when navigating through site
import ScrollToTop from "./Components/ScrollToTop";

// Component - LOGIN MODAL
import LoginModal from "./Components/loginModal/LoginModal";

// Components
import PageNotFound from "./Components/PageNotFound";
import NavBar from "./Components/navBarPage/NavBar";
import Home from "./Components/homePage/Home";
import AboutMe from "./Components/aboutMe/AboutMe";

import AccountList from "./Components/accountList/AccountList";
import Users from "./Components/users/Users";
import UserDetails from "./Components/users/UserDetails";
import UserNewForm from "./Components/users/UserNewForm";
import UserEditForm from "./Components/users/UserEditForm";
import CoinDetails from "./Components/allCoins/CoinDetails";
import Coin from "./Components/allCoins/Coin";

import Shop from "./Components/shop/Shop";
import Cart from "./Components/shop/Cart";
import Learn from "./Components/learn/Learn";
import Games from "./Components/games/Games";
import GamesColoring from "./Components/games/GamesColoring";
import GamesMemory from "./Components/games/GamesMemory";
import Newspaper from "./Components/newspaper/Newspaper";
import Footer from "./Components/footer/Footer";

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // set theme in localStorage
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  
  // dark mode button - passing in as a prop to NavBar.js
  let darkModeButton = (
    <button className="switchThemeButton" onClick={switchTheme}>
      {theme === 'light' ? <BsFillSunFill /> : <MdDarkMode />}
    </button>
  )

  // Login Modal - for having modal open when you click `login` button
  const [openLoginModal, setOpenLoginModal] = useState(false);
  /* 
    if there is an `accessToken` in localStorage, set LoggedIn to true; if not, set LoggedIn to false.
    - changing localStorage to using `getCookie` function from `utils` folder:
  */
  const [loggedIn, setLoggedIn] = useState(getCookie('accessToken') ? true : false);
  
  // login message for MUI toast
  const [loginMessage, setLoginMessage] = useState('');

  // anytime the `loginMessage` changes, want a setTimeout for 3 seconds
  useEffect(() => {

    setTimeout(function() {
      setLoginMessage('');
    }, 3000);

  }, [loginMessage]);

  return (
    <div className="App" data-theme={theme} >
      <ScrollToTop />
      <NavBar 
        darkModeButton={darkModeButton} 
        setOpenLoginModal={setOpenLoginModal} 
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
      <LoginModal 
        openLoginModal={openLoginModal} 
        setOpenLoginModal={setOpenLoginModal} 
        setLoggedIn={setLoggedIn}
        setLoginMessage={setLoginMessage}
      />
      {loginMessage && 
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          {loginMessage}
        </Alert>
      }
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accounts" element={<AccountList />} /> 
          <Route path="/about" element={<AboutMe />} />
          <Route path="/coins" element={<Coin />} />
          <Route path="/coins/:cid" element={<CoinDetails />} />
          <Route path="/users" element={<Users />} />
          <Route path="/create" element={<UserNewForm />} />
          <Route path="/users/:uid/edit" element={<UserEditForm />} />
          <Route exact path="/users/:uid" element={<UserDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/coloring" element={<GamesColoring />} />
          <Route path="/games/match" element={<GamesMemory />} />
          <Route path="/news" element={<Newspaper />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
