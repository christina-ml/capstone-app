import React from "react";
import { Link } from "react-router-dom";

import { IoSettingsSharp } from "react-icons/io5";

import "./User.scss";

const User = ({ user }) => {
	const {
		uid,
		firstname,
		lastname,
		username,
		photo,
		user_admin,
		// user_password,
		// user_email,
		// user_active,
		// user_interests,
		user_city,
		user_state,
	} = user;

	return (
		<div className="userCard">
			<div className="userCard__profileImage">
				<Link to={`/users/${uid}`}>
					<img src={photo} alt="user profile avatar" />
				</Link>
			</div>
			<div className="userCard__info">
				<div className="userCard__info__name">
					<h1>
						{firstname || lastname
							? `${firstname} ${lastname || ""}`
							: `${username}`}
						{user_admin ? (
							<div className="userCard__info__name__tooltip">
								<div className="userCard__info__name__tooltip__tooltiptext">
									<IoSettingsSharp />
								</div>
							</div>
						) : (
							<span></span>
						)}
					</h1>
				</div>
				<div className="userCard__info__infoLine">
					{user_city}, {user_state}
				</div>
				<div className="userCard__info__infoLine__button">
					<Link to={`/users/${uid}`}>See User Details</Link>
				</div>
			</div>
		</div>
	);
};

export default User;
