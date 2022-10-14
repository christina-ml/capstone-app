import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import nftData from './nftData';

// import bluenft from './shopImages/blue_nft.jpeg'
// import greennft from './shopImages/green_nft.jpeg'

import { MdShoppingCart } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";

import './Shop.scss';

const Shop = () => {
  return (
    <div className="nftCards">
        {nftData.map((nft, index) => {
            return (
                <div className="nftCards__card">
                    {/* <div className="nftCards__card__banner"> */}
                        {/* {nft} */}
                        {/* <span>D</span><span>Only at Dick's</span> */}
                        {/* <span>D</span><span>New</span> */}
                        {/* <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> */}
                    {/* </div> */}

                    <div className="nftCards__card__details">
                    <div className="nftCards__card__details__image">
                        <React.Fragment>
                            {nft.image === true && nft.colors === 'yellowgreen' ? <span><img src={nft.url} alt="nft" /></span> : ''}
                            {nft.image === true && nft.colors === 'deepskyblue' ? <span><img src={nft.url} alt="nft" /></span> : ''}
                        </React.Fragment>
                    </div>
                        <div className="circleButton">
                            <div className="circleButton__outer"></div>
                            <div className="circleButton__inner" style={{backgroundColor: `${nft.colors}`}}></div>
                        </div>

                        <div className="nftCards__card__details__itemName">{nft.itemName}</div>
                        <div className="nftCards__card__details__price">${nft.price}</div>
                        <div className="nftCards__card__details__availNearby">
                            <React.Fragment>
                                {nft.availability === 'yes' ? <span><AiFillCheckCircle color="green"/>Shipping Available</span>: <></>}
                                {nft.availability === 'no' ? <span><AiFillCloseCircle color="red"/>Not Available to Ship</span>: <></>}
                                {nft.availability === 'limited' ? <span><AiFillCheckCircle color="orange"/>Limited Stock to Ship</span>: <></>}
                            </React.Fragment>
                            <React.Fragment>
                                {nft.nearby === 'yes' ? <span><AiFillCheckCircle color="green" />Free Ship to Store</span>: <></>}
                                {nft.nearby === 'no' ?  <span><AiFillCloseCircle color="red"/>Not Available to Pickup</span>: <></>}
                                {nft.nearby === 'maybe' ? <span><AiFillCheckCircle color="orange" />In Nearby Stores</span>: <></>}
                            </React.Fragment>
                        </div>
                    </div>
                    <div className="nftCards__cart">
                        <Link to="/cart"><MdShoppingCart color="sienna"/> Add To Cart</Link>
                    </div>
                </div>
            )
  
           
        })}
        
    </div>
  )
}

export default Shop;