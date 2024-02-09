import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

const ShopItemDetails = () => {
	const { nid } = useParams();
    const [shopItem, setShopItem] = useState([]);

    // fetch one nft by ID of nid
    useEffect(() => {
        axios.get(`${API}/nfts/${nid}`)
            .then((res) => {
                setShopItem(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }, [nid]);

	return (
    <div className="ShopItemDetails">
        <div>Item details:</div>
        <h1>
            {shopItem.item_name}
        </h1>
        <h3>
            {shopItem.creator}
        </h3>
    </div>
    )
};

export default ShopItemDetails;
