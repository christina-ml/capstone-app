import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// User Login information
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

// SCSS & react icons
import "./Coin.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa";

// helpers - displaying price with commas
import addCommas from "../../helpers/AddCommas";

// chart js for coin changes
import ChartJsCoin from "./chartjs/ChartJsCoin";

const API = process.env.REACT_APP_API_URL;

const Coin = ({ coin, loggedIn }) => {
	console.log("loggedIn on CoinsList page:", loggedIn)
	const [isAFavorite, setIsAFavorite] = useState(false);

	// const jwtDecodeUser = jwt_decode(Cookies.get('accessToken'));
	// console.log(jwtDecodeUser)
	// console.log(jwtDecodeUser.uid)
  // console.log("coin:", coin)

	// need to POST to: favorites_uid, favorites_cid
	const addFavorite = (e) => {
		const jwtDecodeUser = jwt_decode(Cookies.get("accessToken"));
		e.preventDefault();

		// check if accessToken exists in cookies
		if (Cookies.get("accessToken")) {
			// user is logged in and can favorite this coin

			axios
				.post(`${API}/favorites`, {
					favorites_uid: `${jwtDecodeUser.uid}`,
					favorites_cid: `${coin.cid}`,
				})
				.then((res) => {

				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	return (
		<div className="coin">
			<Link to={`/coins/${coin.cid}`}>
				<div className="coin__card">
					<div className="coin__card__logo">
						<img src={coin.logo} alt="coin logo" />
						<div className="coin__card__logo__coinName">
							{coin.name}{" "}
							<span className="coin__card__logo__coinName__symbol">
								{coin.symbol}
							</span>
						</div>
						{(loggedIn === true)  ? 
							<button
								className="coin__card__logo__favoriteCoinHeartButton"
								onClick={addFavorite}
							>
								{isAFavorite ? <FaHeart></FaHeart> : <FaRegHeart></FaRegHeart>}
							</button>
							:
							<div className="coin__card__logo__favoriteCoinDontShowHeartButton"></div>
						}
					</div>
					<hr />
					<div className="coin__card__basicInfo">
						<div className="coin__card__basicInfo__price">
							Price: ${addCommas(coin.price)}
						</div>
						<div className="coin__card__basicInfo__price">
							Market Cap: ${addCommas(coin.market_cap)}
						</div>

						<ChartJsCoin coin={coin} />

						<div className="coin__card__basicInfo__lastUpdated">
							Last Updated:{" "}
							{new Date(coin.last_updated).toLocaleString(
								"en-US"
							)}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Coin;