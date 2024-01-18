import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
import axios from "axios";

import "./Shop.scss";
import { MdShoppingCart } from "react-icons/md";

import NftCards from "./NftCards";
import { Link } from "react-router-dom";

import LoadingSpinner from "../../cryptotalkComponents/buttons/LoadingSpinner";

const API = process.env.REACT_APP_API_URL;

const Shop = () => {
	// hooks
	const [nftData, setNftData] = useState([]);
	// items that will be added to the cart - pass in an object
	// const [cartItems, setCartItems] = useState([]);

	// -- axios to fetch nfts data from backend
	useEffect(() => {
		// PROTECTED ROUTE - only users that are logged in can access this page.
		// get the access token
		const requestOptions = {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		};
		axios
			.get(API + "/nfts", requestOptions)
			.then((res) => {
				// protected route - error would be if user is not logged in
				if (res.data.error) {
					console.log(res.data.error);
				} else {
					// console.log("res.data:", res.data)
					setNftData(res.data);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const sortedNftDataByNameAsc = nftData.sort((a, b) => {
		return a.item_name > b.item_name ? 1 : -1;
	});

	return (
		<div className="nftShop">
			<div className="nftShop__shopHeader">
				<h1>Explore, collect, and sell NFTs</h1>
				{nftData.length > 0 ? (
					<Link to="/cart">
						<button className="nftShop__shopHeader__cartButton">
							<MdShoppingCart /> View Cart
						</button>
					</Link>
				) : (
                    <LoadingSpinner spinnerLabel="Loading shop..." />
				)}
			</div>
			<div>
				<NftCards sortedNftData={sortedNftDataByNameAsc} />
			</div>
		</div>
	);
};

export default Shop;