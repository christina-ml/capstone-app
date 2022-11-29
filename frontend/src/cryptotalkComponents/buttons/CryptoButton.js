import { Link } from 'react-router-dom';

import './CryptoButton.scss';

function CryptoButton({buttonText}){

    return (
        <Link to="/about">
            <div className="cryptoButton">
                {buttonText}
            </div>
        </Link>
    )
}

export default CryptoButton;