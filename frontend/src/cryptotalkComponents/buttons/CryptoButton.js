import { Link } from 'react-router-dom';

import './CryptoButton.scss';

function CryptoButton({buttonText, whereToNavigate}){

    return (
        <Link to={whereToNavigate}>
            <div className="cryptoButton">
                {buttonText}
            </div>
        </Link>
    )
}

export default CryptoButton;