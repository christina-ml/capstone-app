import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import kayakData from './kayakData';

import bluekayak from './shopImages/blue_kayak.jpeg'
import greenkayak from './shopImages/green_kayak.jpeg'

import { MdShoppingCart } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";

import './Shop.scss';

const Shop = () => {
  return (
    <div className="kayakCards">
        {kayakData.map((kayak, index) => {
            return (
                <div className="kayakCards__card">
                    {/* <div className="kayakCards__card__banner"> */}
                        {/* {kayak} */}
                        {/* <span>D</span><span>Only at Dick's</span> */}
                        {/* <span>D</span><span>New</span> */}
                        {/* <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> */}
                    {/* </div> */}

                    <div className="kayakCards__card__details">
                    <div className="kayakCards__card__details__image">
                        <React.Fragment>
                            {kayak.image === true && kayak.colors === 'yellowgreen' ? <span><img src={greenkayak} alt="kayak" /></span> : ''}
                            {kayak.image === true && kayak.colors === 'deepskyblue' ? <span><img src={bluekayak} alt="kayak" /></span> : ''}
                        </React.Fragment>
                    </div>
                        <div className="circleButton">
                            <div className="circleButton__outer"></div>
                            <div className="circleButton__inner" style={{backgroundColor: `${kayak.colors}`}}></div>
                        </div>

                        <div className="kayakCards__card__details__itemName">{kayak.itemName}</div>
                        <div className="kayakCards__card__details__price">${kayak.price}</div>
                        <div className="kayakCards__card__details__availNearby">
                            <React.Fragment>
                                {kayak.availability === 'yes' ? <span><AiFillCheckCircle color="green"/>Shipping Available</span>: <></>}
                                {kayak.availability === 'no' ? <span><AiFillCloseCircle color="red"/>Not Available to Ship</span>: <></>}
                                {kayak.availability === 'limited' ? <span><AiFillCheckCircle color="orange"/>Limited Stock to Ship</span>: <></>}
                            </React.Fragment>
                            <React.Fragment>
                                {kayak.nearby === 'yes' ? <span><AiFillCheckCircle color="green" />Free Ship to Store</span>: <></>}
                                {kayak.nearby === 'no' ?  <span><AiFillCloseCircle color="red"/>Not Available to Pickup</span>: <></>}
                                {kayak.nearby === 'maybe' ? <span><AiFillCheckCircle color="orange" />In Nearby Stores</span>: <></>}
                            </React.Fragment>
                        </div>
                    </div>
                    <div className="kayakCards__cart">
                        <Link to="/cart"><MdShoppingCart color="sienna"/> Add To Cart</Link>
                    </div>
                </div>
            )
  
           
        })}
        
    </div>
  )
}

export default Shop;