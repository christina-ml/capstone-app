// Resources for questions:
// https://learncrypto.com/tldr/crypto-basics#who-is-satoshi-nakamoto-why-are-they-important
// https://learncrypto.com/blog
// https://learncrypto.com/knowledge-base/basics
// https://www.coinbase.com/learn/crypto-basics

import React from 'react';
import "./Learn.scss";

// questions and answers
import learnData from './learnData';
import Accordion from './Accordion';

const Learn = () => {
  
  // questions card using accordion
  let learnQuestionsAccordion = learnData.map((learn) => {
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
        
        <div className="Learn__questionsAccordion">
          {learnQuestionsAccordion}
        </div>
    </div>
  )
}

export default Learn;