import React, { useState } from "react";

import "./About.scss";
import ProfileCard from "./ProfileCard";
import QrCode from "./QrCode";

const About = () => {
	const [qrIsOpen, setQrIsOpen] = useState(false);

	const handleShareButtonClick = (e) => {
		e.preventDefault();
		setQrIsOpen(!qrIsOpen);
	};

	return (
		<div className="about">
			<div className="about__company">
				<h2>About CryptoTalk</h2>
				<p>
					CryptoTalk was founded in June 2022 as a personal project.
					Its mission is to make cryptocurrency education more
					accessible. Built using JavaScript and the PERN Stack
					(PostgreSQL, Express.js, React.js, and Node.js), CryptoTalk
					provides educational information about cryptocurrencies in a
					clear, concise, user-friendly way. Understanding digital
					assets empowers users to navigate the rapidly evolving world
					of crypto.
				</p>
				<p>
					At CryptoTalk, we value education, transparency, and
					accessibility. Whether you're a beginner exploring
					cryptocurrencies for the first time or a seasoned investor
					looking for insights, our goal is to provide reliable
					resources that make learning about crypto easier and more
					engaging.
				</p>
				<p>
					This project is continuously evolving, and new features are
					always in the works. Stay tuned for updates, and thank you
					for being part of the CryptoTalk community!
				</p>
				<p>
					Do you have suggestions or feedback for CryptoTalk? Reach
					out using the contact info below.
				</p>
				<h2>Why "Talk Crypto To Me"?</h2>
				<p>
					At CryptoTalk, we believe in the power of clear and
					accessible communication in the world of cryptocurrency.
					"Talk Crypto To Me" is our call to action - encouraging you
					to integrate crypto terms into your daily conversations. By
					practicing and engaging with crypto language, you'll become
					more confident in discussing complex concepts, and before
					you know it, you'll be talking crypto like a pro!
				</p>
				<p></p>
			</div>
			<h2>Contact</h2>
			<div className="about__cards">
				<ProfileCard />
				<div className="bio">
					<p>
						I'm Christina, a Full Stack Software Engineer from New
						York City.
					</p>
					<p>
						Currently I am a recent graduate of the Pursuit
						Fellowship program in NYC, an intensive 12 - month
						software engineering fellowship with a 9% acceptance
						rate.
					</p>
					<p>Please feel free to connect with me on LinkedIn.</p>
				</div>
				<button
					className="shareButton"
					onClick={handleShareButtonClick}
				>
					<span>Share CryptoTalk</span>
				</button>
				{qrIsOpen && (
					<div className="qrSection">
						<div className="qrSection__centerDiv">
							<QrCode />
							<div className="qrShareText">
								Share CryptoTalk with your friends
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default About;
