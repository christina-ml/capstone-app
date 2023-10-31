import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CybersecurityNews.scss";

// react icons
import { RxOpenInNewWindow } from "react-icons/rx";

import Cookies from "js-cookie";

// CybersecurityNews Components
import NewsSidebarCyber from "./NewsSidebarCyber";
import ThematicCard from "./ThematicCard";

const API = process.env.REACT_APP_API_URL;

const CybersecurityNews = () => {
	// overlay for if logged in or not
	const [overlay, setOverlay] = useState("Show");

	// how we can change our routes
	// TODO: build our route on the backend
	let navigate = useNavigate();

	// call to our backend
	const requestOptions = {
		// grab our jwt token from localStorage
		headers: {
			Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
		},
	};

	// for login-protected route
	useEffect(() => {
		// console.log("fetch in newspaper.js:",  `${API}/users/authenticate`)
		fetch(`${API}/users/authenticate`, requestOptions)
			.then((response) => response.json())
			.then((data) => {
				// check if accessToken exists in cookies
				if (Cookies.get("accessToken")) {
					setOverlay(false); // remove overlay if logged in
				} else {
					setOverlay(true); // show overlay if not logged in
					// back to the homepage
					// navigate('/');
				}
			})
			.catch((error) => {
				console.log(error);
				navigate("/");
			});
	}, []);

	return (
		<div className="cybersecurityNews" id={`overlay${overlay}`}>
			<div className={`cybersecurityNews__overlay${overlay}`}>
				<div
					className={`cybersecurityNews__overlay${overlay}__needLoggedIn`}
				>
					<div>You must be logged in to view this page.</div>
					<h3>Log In or Create a free account.</h3>
					<div>
						Gain access to free articles, news, and special offers.
					</div>
				</div>
			</div>
			{/* <!-- header --> */}
			<div className="cybersecurityNews__header">
				<h1>Cybersecurity News in Crypto</h1>
			</div>

			{/* <!-- main body of web page --> */}
			<body>
				<div className="cybersecurityNews__main">
					<div className="cybersecurityNews__main__article">
						<h2>
							N. Korean Lazarus Group Targets Software Vendor
							Using Known Flaws
						</h2>
						<section className="cybersecurityNews__main__article__photo">
							<img
								src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgT27QKiSwW_wYGMMGISGb9FoxqwA0DAVDwp1B7D6yIdiHOMaCieAT577kxVf2DfNwCBTNHrYSPyxNA49Nq13MXyURvZMs6fFQUqxlbQ1j8sqdFBeQgxkvdavshz1EsVNpjGSb-rrEwyZw9JehIabrXKyRzM2KpztcdK2RDFHhZtU6hAq7diGo2Ko3qRmW-/s728-rw-ft-e30/north.jpg"
								alt="N. Korean Lazarus Group"
								align="left"
							/>
						</section>
						<section className="cybersecurityNews__main__article__content">
							<p>
								The North Korea-aligned Lazarus Group has been attributed as behind a new campaign in which an unnamed 
								software vendor was compromised through the exploitation of known security flaws in another high-profile software.
							</p>
							<p>
								The attack sequences, according to Kaspersky, culminated in the deployment of malware families such as 
								SIGNBT and LPEClient, a known hacking tool used by the threat actor for victim profiling and payload delivery.
							</p>
							<p>
								"The adversary demonstrated a high level of sophistication, employing advanced evasion techniques and 
								introducing SIGNBT malware for victim control," security researcher Seongsu Park said. "The SIGNBT malware
								 used in this attack employed a diverse infection chain and sophisticated techniques."
							</p>
							<p>
								The Russian cybersecurity vendor said the company that developed the exploited software had been a victim of 
								a Lazarus attack several times, indicating an attempt to steal source code or poison the software supply chain, as 
								in the case of the 3CX supply chain attack.
							</p>
							<p>
								The Lazarus Group "continued to exploit vulnerabilities in the company's software while targeting other software
								 makers," Park added. As part of the latest activity, a number of victims are said to have been singled out as of 
								 mid-July 2023.
							</p>
							<div className="cybersecurityNews__main__article__source">
								<a
									href="https://thehackernews.com/2023/10/n-korean-lazarus-group-targets-software.html?_m=3n%2e009a%2e3187%2efw0ao45co4%2e26f0"
									target="_blank"
									rel="noreferrer"
								>
									Read Full Article <RxOpenInNewWindow />
								</a>
							</div>
						</section>
						<h2>
							EleKtra-Leak Cryptojacking Attacks Exploit AWS IAM
							Credentials Exposed on GitHub
						</h2>
						<section className="cybersecurityNews__main__article__photo">
							<img
								src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXeQxZBAif-vBE_pjd_08qxcM7o3TUK1NBANhCokHLfGtoRWg2Ivz9tUfR8RDSW583nofB3x0kwrxjbqlNlVT1YHc2Rrdr8vdtb5938WjVaDfT-iain0tZBgRb6r6rW0MdtjUbQ58sgAChDZD0VthJFC9mKkUwprQmHZOsBV37fUo_zNw0KM4yc0EqbEQ7/s728-rw-ft-e30/amazon.jpg"
								alt="EleKtra-Leak Cryptojacking Attacks"
								align="left"
							/>
						</section>
						<section className="cybersecurityNews__main__article__contentBelow">
							<p>
								A new ongoing campaign dubbed EleKtra-Leak has set its eyes on exposed Amazon Web 
								Service (AWS) identity and access management (IAM) credentials within public GitHub repositories
								 to facilitate cryptojacking activities.
							</p>
							<p>
								"As a result of this, the threat actor associated with the campaign was able to create multiple AWS 
								Elastic Compute (EC2) instances that they used for wide-ranging and long-lasting cryptojacking 
								operations," Palo Alto Networks Unit 42 researchers William Gamazo and Nathaniel Quist said in a technical 
								report shared with The Hacker News.
							</p>
							<p>
								The operation, active since at least December 2020, is designed to mine Monero from as many as 474 
								unique Amazon EC2 instances between August 30 and October 6, 2023.
							</p>
							<p>
								A standout aspect of the attacks is the automated targeting of AWS IAM credentials within four minutes 
								of their initial exposure on GitHub, indicating that threat actors are programmatically cloning and scanning 
								the repositories to capture the exposed keys.
							</p>
							<p>
								The adversary has also been observed blocklisting AWS accounts that publicize IAM credentials in what's 
								likely seen as an effort to prevent further analysis. There is evidence to suggest that the attacker may also 
								have been linked to another cryptojacking campaign disclosed by Intezer in January 2021 aimed at poorly 
								secured Docker services using the same bespoke mining software.
							</p>
							<div className="cybersecurityNews__main__article__source">
								<a
									href="https://thehackernews.com/2023/10/elektra-leak-cryptojacking-attacks.html?_m=3n%2e009a%2e3187%2efw0ao45co4%2e26e6"
									target="_blank"
									rel="noreferrer"
								>
									Read Full Article <RxOpenInNewWindow />
								</a>
							</div>
						</section>
					</div>
					<div className="sidebarSections">
						<NewsSidebarCyber />
						<ThematicCard />
					</div>
				</div>
			</body>
		</div>
	);
};

export default CybersecurityNews;
