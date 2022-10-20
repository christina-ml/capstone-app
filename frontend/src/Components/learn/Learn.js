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

  // questions card
  // let learnQuestions = learnData.map((learn) => {
  //   return (
  //     <div>
  //       <ul>
  //         <li>{learn.question}</li>
  //         <li>{learn.answer}</li>
  //       </ul>
  //     </div>
  //   )
  // })



  return (
    <div className="Learn">
        <header>
            <h1 className="Learn__header">Learn CryptoTalk</h1>
        </header>
        <h3>
          Crypto basics
        </h3>
        <div>
          New to crypto? — start with these guides
        </div>
        <div>Beginner's Guide</div>
        
        <Accordion />

        {/* <div className="Learn__questionsCard">
          {learnQuestions}
        </div> */}

        {/* <div className="questions"> */}
          {/* <h4>About Cryptocurrencies</h4> */}
          {/* <ul> */}
            {/* <li>What is cryptocurrency?</li> */}
            {/* <li>Why are there so many cryptocurrencies?</li> */}
            {/* <li>Why do we need crypto? What is wrong with existing money?</li> */}
            {/* <li>Why are cryptocurrency prices so volatile?</li> */}
            {/* <li>Who is Satoshi Nakamoto? Why are they important?</li> */}
            {/* <li>What is a bull or bear market?</li> */}
          {/* </ul> */}
          {/* <h4>About Bitcoin</h4> */}
          {/* <ul> */}
            {/* <li>What is Bitcoin?</li> */}
            {/* <li>Who is using Bitcoin?</li> */}
            {/* <li>Why does a cryptocurrency like Bitcoin have value?</li> */}
            {/* <li>How does Bitcoin work?</li> */}
            {/* <li>What is Bitcoin Mining?</li> */}
            {/* <li>Can Bitcoin be used for regular shopping/spending?</li> */}
            {/* <li>What is a Bitcoin halving?</li> */}
            {/* <li>What are the limitations of Bitcoin?</li> */}
          {/* </ul> */}

          {/* <h4>About Ethereum</h4> */}
          {/* <ul> */}
            {/* <li>What is Ethereum? What does it do?</li> */}
          {/* </ul> */}

          {/* <h4>Learn More</h4> */}
          {/* <ul>
            <li>What is Cardano?</li>
            <li>What is fiat money?</li>
            <li>What is a stablecoin?</li>
            <li>What is a Stablecoin? What does it do?</li>
            <li>What is a Blockchain? What does it do?</li>
            <li>What is Dogecoin?</li>
            <li>What is Polkadot (DOT)?</li>
            <li>What is Polygon (MATIC)?</li>
            <li>What is Uniswap?</li>
            <li>What is CeFi?</li>
            <li>What is DeFi?</li>
            <li>What is cryptography?</li>
            <li>What is a DEX?</li>
            <li>What is an ETF?</li>
            <li>What is a fork?</li>
            <li>A fork in the road</li>
            <li>What is inflation?</li>
            <li>What is Internet Computer (ICP)?</li>
            <li>What is market cap?</li>
            <li>What is mining?</li>
            <li>What is a non-fungible token (NFT)?</li>
            <li>How does an NFT have value?</li>
            <li>What is Axie Infinity?</li>
            <li>What is "proof of work" or "proof of stake"?</li>
            <li>What is a protocol?</li>
            <li>What is a private key?</li>
            <li>What is a recovery phrase?</li>
            <li>What is a smart contract?</li>
            <li>What is technical analysis?</li>
            <li>What is a token?</li>
            <li>What is volatility?</li>
            <li>What is the Lightning Network?</li>
            <li>Which countries use crypto the most?</li>
            <li>AMM Explained: Automated Market Makers & How They Work</li>
            <li>What Are Decentralised Crypto Exchanges? DEX Explained</li>
            <li>What Are Wrapped Crypto Tokens?</li>
            <li>What are Wrapped Tokens & how do they work?</li>
            <li>Measuring crypto adoption</li>
            <li>What are Tokenomics?</li>
            <li>Crypto's new frontiers</li>
            <li>What are Blockchain Bridges & how do they work?</li>
            <li>What is an Oracle in Blockchain?</li>
          </ul> */}
        {/* </div> */}
        {/* <div className="answers"> */}
        {/* </div> */}
    </div>
  )
}

export default Learn;