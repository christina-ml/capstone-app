import { Link } from "react-router-dom";

import '../App.scss';

// react-icons
import { SiProbot } from 'react-icons/si';

function PageNotFound() {
    return (
      <div className="pageNotFound">
        <div className="pageNotFound__circle"></div>
        <div className="pageNotFound__antenna"></div>
        <div className="pageNotFound__container">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <div className="pageNotFound__robot">
            <SiProbot />
          </div>
          <div className="pageNotFound__backButton">
            <Link to="/">
              <h2>Back to CryptoTalk</h2>
            </Link>
          </div>
        </div>
        <div className="pageNotFound__footUnderline"></div>
      </div>
    );
  }
  
export default PageNotFound;