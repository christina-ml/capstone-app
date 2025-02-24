import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Coin from "./Coin";
import LoadingSpinner from "../../cryptotalkComponents/buttons/LoadingSpinner";

// SCSS & react icons
import "./CoinList.scss";

// User Login information
// import Cookies from "js-cookie";
// import { jwtDecode } from "jwt-decode";

const API = process.env.REACT_APP_API_URL;

const CoinList = ({ loggedIn }) => {
	const [allCoins, setAllCoins] = useState([]);

	// const token = `${Cookies.get("accessToken")}`;
	// const jwtDecodeUser = jwtDecode(token);
	// console.log(jwtDecodeUser)
	// console.log(jwtDecodeUser.uid)

	/*
    if jwtDecodeUser has a value, there is an access token
    Then I want to fetch from the backend with coins and favorites
  */

	// get all coins that exist in the database
	useEffect(() => {
		axios
			.get(`${API}/coins`)
			.then((res) => {
				setAllCoins(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// make `allCoins` sorted alphabetically
	const sortedCoinsAsc = allCoins.sort((a, b) => {
		return a.name > b.name ? 1 : -1;
	});

	return (
		<div className="coinList">
			<h2>Guide to Cryptocurrencies</h2>
			<div className="coinList__guide">
				<div>
					As of February 2025, there are over 36.4 million crypto
					tokens - and that number is projected to reach 100 million
					by the end of 2025! With so many digital assets emerging,
					it's important to stay informed and identify the most
					relevant ones.
				</div>
				<div>
					Here's a curated selection of {allCoins.length} top
					cryptocurrencies, each with their own unique technology and
					use cases. Click a card for more insights.
				</div>
			</div>
			{allCoins.length === 0 ? (
				<LoadingSpinner spinnerLabel="Loading..." />
			) : (
				<div className="coinList__collection">
					{sortedCoinsAsc.map((coin) => {
						return (
							<Coin
								coin={coin}
								key={coin.name + coin.cid}
								loggedIn={loggedIn}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default CoinList;
