import { Routes, Route } from "react-router-dom";

// SCSS
import './App.scss';

// Local Storage
import useLocalStorage from 'use-local-storage';

// react-icons
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';

// Components
import PageNotFound from "./Components/PageNotFound";
import NavBar from "./Components/navBarPage/NavBar";
import Home from "./Components/homePage/Home";

import Users from "./Components/users/Users";
import UserDetails from "./Components/users/UserDetails";
import UserNewForm from "./Components/users/UserNewForm";
import UserEditForm from "./Components/users/UserEditForm";
import Login from "./Components/login/Login";
import About from "./Components/about/About";


// import Footer from "./Components/Footer";

// import Cryptocurrency from "./Components/Cryptocurrency";

// Users Components - Admin
// import UsersAdmin from "./Components/Admin/UsersAdmin";
// import UserEditAdmin from "./Components/Admin/UserEditAdmin";
// import UserDetailsAdmin from "./Components/Admin/UserDetailsAdmin";
// Users Components - For User
// import UserCreate from "./Components/UserProfile/UserCreate";
// import UserLogin from "./Components/UserProfile/UserLogin";
// import User from "./Components/UserProfile/User";
// import UserEdit from "./Components/UserProfile/UserEdit";
// import UserFavorites from "./Components/UserProfile/UserFavorites";
// import UserFavorite from "./Components/UserProfile/UserFavorite";


// News Articles and Videos Components
// import News from "./Components/News";
// import NewsPage from "./Components/NewsPage";
// import Articles from "./Components/Articles";
// import Article from "./Components/Article";
// import Videos from "./Components/Videos"
// import Video from "./Components/Video";

// Chatbot 
// import AlanBot from "./Components/ChatBot/AlanBot";

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  // const [newsData, setNewsData] = useState([])
  // const [educationArticles, setEducationArticles] = useState([])
  // const [videosData, setVideosData] = useState([])
  
  // const getNewsData = (news) =>{
  //   setNewsData(news)
  // }
  // const getEducationData = (data) =>{
  //   setEducationArticles(data)
  // }
  // const getVideosData =(videos)=>{
  //   setVideosData(videos)
  // }
  
  // dark mode button - passing in as a prop to NavBar.js
  let darkModeButton = (
    <button onClick={switchTheme}>
      {theme === 'light' ? <MdDarkMode /> : <MdOutlineDarkMode />}
    </button>
  )

  return (
    <div className="App" data-theme={theme} >
      <NavBar darkModeButton={darkModeButton} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/create" element={<UserNewForm />} />
          <Route path="/users/:uid/edit" element={<UserEditForm />} />
          <Route exact path="/users/:uid" element={<UserDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/users/:uid" element={<Home />} />
          <Route path="/users/:uid/currencies" element={<Home />} />
          <Route path="/users/:uid/currencies/:cid" element={<Home />} /> */}

          {/* <Route path="/news" element={<News getNewsData={getNewsData} />} /> */}
          {/* <Route path="/news/:id" element={<NewsPage newsData={newsData}/>} /> */}
          {/* <Route path="/cryptocurrency" element={<Cryptocurrency />} /> */}
          {/* <Route path="/articles" element={<Articles getEducationData={getEducationData}/>} /> */}
          {/* <Route path="/articles/:id" element={<Article educationArticles={educationArticles}/>} /> */}
          {/* <Route path="videos" element={<Videos getVideosData={getVideosData}/>} /> */}
          {/* <Route path="/videos/:id" element={<Video videosData={videosData}/>} /> */}

          {/* <Route path="/users" element={<User />} /> */}
          {/* <Route path="/users/login" element={<UserLogin />} /> */}
          {/* <Route path="/users/new" element={<UserCreate />} /> */}
          {/* <Route path="/users/:id/edit" element={<UserEdit />} /> */}
          {/* <Route path="/users/:id/favorites" element={<UserFavorites />} /> */}
          {/* <Route path="/users/:id/favorites/:id" element={<UserFavorite />} /> */}

          {/* <Route path="/admin" element={<UsersAdmin />} /> */}
          {/* <Route exact path="/admin/:id" element={<UserDetailsAdmin />} /> */}
          {/* <Route path="/admin/:id/edit" element={<UserEditAdmin />} /> */}
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </main>
      {/* <Footer /> */}
      {/* <AlanBot /> */}
    </div>
  );
}

export default App;
