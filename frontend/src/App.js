import { Routes, Route } from "react-router-dom";

// SCSS
import './App.scss';

// Local Storage
import useLocalStorage from 'use-local-storage';

// react-icons
import { MdDarkMode } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';

// Component - resets the Scroll location to the Top of page when navigating through site
import ScrollToTop from "./Components/ScrollToTop";

// Components
import PageNotFound from "./Components/PageNotFound";
import NavBar from "./Components/navBarPage/NavBar";
import Home from "./Components/homePage/Home";
import AboutMe from "./Components/aboutMe/AboutMe";

import Users from "./Components/users/Users";
import UserDetails from "./Components/users/UserDetails";
import UserNewForm from "./Components/users/UserNewForm";
import UserEditForm from "./Components/users/UserEditForm";

// components for login (not working)
// import Login from "./Components/login/Login";
// import UserLogin from "./Components/loginMUI/UserLogin";
// import LoginRH from "./Components/loginReactHooks/LoginRH";
import LoginLS from "./Components/loginLocalStorage/LoginLS";
// import LoginUsingBackend from "./Components/loginUsingBackend/LoginUsingBackend";

import Shop from "./Components/shop/Shop";
import Cart from "./Components/shop/Cart";
import Learn from "./Components/learn/Learn";
import Games from "./Components/games/Games";
import GamesColoring from "./Components/games/GamesColoring";
import GamesMemory from "./Components/games/GamesMemory";

// import AllCoins from "./Components/allCoins/AllCoins";
import CoinDetails from "./Components/allCoins/CoinDetails";
import Coin from "./Components/allCoins/Coin";

import Newspaper from "./Components/newspaper/Newspaper";
import Footer from "./Components/footer/Footer";

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
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

  return (
    <div className="App" data-theme={theme} >
      <ScrollToTop />
      <NavBar darkModeButton={darkModeButton} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/coins" element={<Coin />} />
          <Route path="/coins/:cid" element={<CoinDetails />} />
          <Route path="/users" element={<Users />} />
          <Route path="/create" element={<UserNewForm />} />
          <Route path="/users/:uid/edit" element={<UserEditForm />} />
          <Route exact path="/users/:uid" element={<UserDetails />} />

          <Route path="/login" element={<LoginLS />} />
          {/* <Route path="/register" element={<LoginUsingBackend />} /> */}
          
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
