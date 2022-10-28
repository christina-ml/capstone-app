import React from 'react';
import { Link } from 'react-router-dom';
import nftData from './nftData';

import { MdShoppingCart } from "react-icons/md";

// helpers - convert USD to ETH
import convertUSDToETH from '../../helpers/convertUSDToETH.js';

import './Shop.scss';

const Shop = () => {

 // make `nftData` sorted alphabetically
  let sortedNftData = nftData.sort((a, b) => {
    return (a.itemName > b.itemName) ? 1 : -1;
  })


  return (
    <div className="nftShop">
        <h1>Explore, collect, and sell NFTs</h1>
        <div className="nftCards">
            {sortedNftData.map((nft, index) => {
                return (
                    <div className="nftCards__card" key={nft+index}>
                        <div className="nftCards__card__details">
                            <div className="nftCards__card__details__image">
                                <img src={nft.url} alt="nft" />
                            </div>
                            <div className="nftCards__card__details__itemName">{nft.itemName}</div>
                            <div className="nftCards__card__details__price">
                                <div className="nftCards__card__details__price__current">Current price</div>
                                <img src={nft.currencyLogo} alt="currency logo"/>
                                {convertUSDToETH(nft.price)} {nft.currency} <span>${nft.price}</span>
                            </div>
                        </div>
                        <div className="nftCards__cart">
                            <Link to="/cart"><MdShoppingCart color="sienna"/> Add To Cart</Link>
                        </div>
                    </div>
                )
    
            
            })}
        </div>
    </div>
  )
}

export default Shop;