import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// questions and answers
import learnData from "./learnData";

// Components
import Accordion from "./Accordion";
import SearchBar from "../searchBar/SearchBar";

import "./Learn.scss";

const Learn = () => {
	const [searchTerm, setSearchTerm] = useState(""); // for searchBar

	// search bar - filter by topics
	let filteredTopics = learnData;
	if (searchTerm) {
		filteredTopics = learnData.filter((learnDataQandA) => {
			const topic = `${learnDataQandA.topic} ${learnDataQandA.question}`;
			const topicToLowerCase = topic.toLowerCase();
			const searchTermToLowerCase = searchTerm.toLowerCase();
			return topicToLowerCase.includes(searchTermToLowerCase);
		});
	}

	// questions card using accordion
	let learnQuestionsAccordion = filteredTopics.map((learn, index) => {
		return <Accordion learn={learn} key={index + uuidv4()} />;
	});

	return (
		<div className="Learn">
			<header>
				<h1>Learn CryptoTalk</h1>
			</header>
			<div className="Learn__startHere">
				<h3>Crypto basics</h3>
				<div>New to crypto? — start here</div>
			</div>
			<div className="Learn__search">
				<SearchBar
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					placeholder={`Search by topic or question`}
				/>
			</div>
			{filteredTopics.length ? (
				<div className="Learn__questionsAccordion">
					{learnQuestionsAccordion}
				</div>
			) : (
				<div>No results: Topic or question not found.</div>
			)}
		</div>
	);
};

export default Learn;
