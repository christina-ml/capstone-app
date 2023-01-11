import React from 'react';
// import { Link } from 'react-router-dom';
import './NftCards.scss';

// react icons
import { MdShoppingCart } from "react-icons/md";

// helpers - convert USD to ETH
import convertUSDToETH from '../../helpers/ConvertUSDToETH';

const NftCards = ({ sortedNftData, handleAddToCart }) => {
  return (
    <div className="nftCards">
        {sortedNftData.map((nft, index) => {
            return (
                <div className="nftCards__card" key={nft+index}>
                    <div className="nftCards__card__details">
                        <div className="nftCards__card__details__image">
                            <img src={nft.url} alt="nft" />
                        </div>
                        <div className="nftCards__card__details__itemName">{nft.item_name}</div>
                        <div className="nftCards__card__details__price">
                            <div className="nftCards__card__details__price__current">Current price</div>
                            <img src={nft.currency_logo} alt="currency logo"/>
                            {convertUSDToETH(nft.price)} {nft.currency} <span>${nft.price}</span>
                        </div>
                    </div>
                    {/* <Link to="/cart"> */}
                        <div className="nftCards__card__addToCart">
                            <span onClick={handleAddToCart}><MdShoppingCart/> Add To Cart</span>
                        </div>
                    {/* </Link> */}
                </div>
            )
        })}
    </div>
  )
}

export default NftCards;