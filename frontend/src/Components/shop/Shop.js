import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from "axios";

import './Shop.scss';

import NftCards from './NftCards';
import Cart from './Cart';

const API = process.env.REACT_APP_API_URL;

const Shop = () => {
    // hooks
    const [nftData, setNftData] = useState([]);
    // items that will be added to the cart - pass in an object
    const [cartItems, setCartItems] = useState([]);

    // -- axios to fetch nfts data from backend
    useEffect(() => {
        axios.get(API + "/nfts")
            .then((res) => {
                // console.log("res.data:", res.data)
                setNftData(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }, [API]);


    // make `nftData` sorted alphabetically
    let sortedNftData = nftData.sort((a, b) => {
        return (a.itemName > b.itemName) ? 1 : -1;
    })

    const handleAddToCart = () => {
        console.log("clicked the add to cart button")
    }

    return (
    <div className="nftShop">
        <h1>Explore, collect, and sell NFTs</h1>
        <div>
            <NftCards sortedNftData={sortedNftData} handleAddToCart={handleAddToCart} />
        </div>
        <hr />
        <div>
            <Cart cartItems={cartItems} handleAddToCart={handleAddToCart} />
        </div>

    </div>
  )
}

export default Shop;