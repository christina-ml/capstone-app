import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/cryptotalk-logo.png"

function NavBar() {
  return (
    <div className="navbar">

      <div className="navbar-logo-container">
        <Link to="/">

          <div className="navbar-logo-and-text">

            <div className="nav-app-logo">
              <img src={logo} alt="cryptotalk logo" />
            </div>
            
            <div className="nav-app-name">
              CryptoTalk
              <div className="nav-app-tag">
                Talk Crypto To Me 
              </div>
            </div>

          </div>

        </Link>
      </div>

      <div className="navbar-links-container">

        <div className="navbar-links">
          <div><Link to="/cryptocurrency">Cryptocurrency</Link></div>
          <div><Link to="/articles">Articles</Link></div>
          <div><Link to="/videos">Videos</Link></div>
          <div><Link to="/news">News</Link></div>
          
          <div className="navlinks">
            <div class="dropdown">
              <div class="dropbtn"><Link to="/users">Users</Link></div>
              <div class="dropdown-content">
                <Link to="/users/login">Users/Login</Link>
                <Link to="/users/new">Users/New "Sign Up"</Link>
                <Link to="/users/:id/edit">Users/:ID/Edit</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


export default NavBar;
