import React from 'react';
import { useNavigate } from 'react-router-dom';

import './ThematicCard.scss';


const ThematicCard = ({url = '/'}) => {
    let navigate = useNavigate();

    const handleCallToAction = () => {
        navigate(url);
    }

  return (
    <div className="thematicCard">
        <img 
            className="thematicCard__image" 
            src="https://n.nordstrommedia.com/id/1eded89e-7279-4606-8944-93e354595e87.jpeg?h=365&w=402" 
            alt="gift wrapping" 
            onClick={handleCallToAction}
        />
        <div className="thematicCard__title">Give the Gift of Crypto</div>
        <div className="thematicCard__text">
            We make it easy with festive options. Shop our NFT store or gift crypto online to see your choices.
        </div>
        <span className="thematicCard__callToAction"
            onClick={handleCallToAction}
        >
            Learn More
        </span>
    </div>
  )
}

export default ThematicCard;