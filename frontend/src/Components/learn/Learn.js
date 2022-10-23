// Resources for questions:
// https://learncrypto.com/tldr/crypto-basics#who-is-satoshi-nakamoto-why-are-they-important
// https://learncrypto.com/blog
// https://learncrypto.com/knowledge-base/basics
// https://www.coinbase.com/learn/crypto-basics

import React, { useState } from 'react';
import "./Learn.scss";

// questions and answers
import learnData from './learnData';
import Accordion from './Accordion';

import SearchBar from '../searchBar/SearchBar';

const Learn = () => {
  const [searchTerm, setSearchTerm] = useState(''); // for searchBar

  // search bar - filter by topics
  let filteredTopics = learnData;
  if (searchTerm){
      filteredTopics = learnData.filter(learnDataQandA => {
          const topic = `${learnDataQandA.topic}`;
          const topicToLowerCase = topic.toLowerCase();
          const searchTermToLowerCase = searchTerm.toLowerCase();
          return topicToLowerCase.includes(searchTermToLowerCase);
      })
  }

  // questions card using accordion
  let learnQuestionsAccordion = filteredTopics.map((learn) => {
    return (
      <Accordion learn={learn} />
    )
  })

  return (
    <div className="Learn">
        <header>
            <h1>Learn CryptoTalk</h1>
        </header>
        <h3>Crypto basics</h3>
        <div>New to crypto? — start here</div>
        <SearchBar searchTerm={searchTerm} 
                  setSearchTerm={setSearchTerm} 
                  placeholder={`Search by topic`}
        />
        <div className="Learn__questionsAccordion">
          {learnQuestionsAccordion}
        </div>
    </div>
  )
}

export default Learn;