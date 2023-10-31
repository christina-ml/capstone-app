import React from 'react';

import './NewsSidebarCyber.scss';

// react icons
import { RxOpenInNewWindow } from "react-icons/rx"

const NewsSidebarCyber = () => {
  return (
    <div className="sidebar">
        <div className="sidebar__title">
            <span className="red-circle"></span>Most Read
        </div>
        <div className="sidebar__list">
            {/* <img src="https://www.coindesk.com/resizer/7FtiguOfIIIrL9-dY5wbj01jgzs=/975x731/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/YQ5ZL6KEPFEEXP2CDFNUQDXAXE.jpg" alt="bitcoin mining"/> */}
            
            <div className="articles">

            <div className="article">
                <div className="article__number">1</div>
                <div className="article__title">
                    <a
                        href="https://thehackernews.com/2023/10/githubs-secret-scanning-feature-now.html"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub's Secret Scanning Feature Now Covers AWS, Microsoft, Google, and Slack <RxOpenInNewWindow />
                    </a>
                </div>
            </div>

            <div className="article">
                <div className="article__number">2</div>
                <div className="article__title">
                    <a
                        href="https://thehackernews.com/2023/10/north-koreas-lazarus-group-launders-900.html"
                        target="_blank"
                        rel="noreferrer"
                    >
                        North Korea's Lazarus Group Launders $900 Million in Cryptocurrency <RxOpenInNewWindow />
                    </a>
                </div>
            </div>
            
            <div className="article">
                <div className="article__number">3</div>
                <div className="article__title">
                    <a
                        href="https://thehackernews.com/2023/09/north-koreas-lazarus-group-suspected-in.html"
                        target="_blank"
                        rel="noreferrer"
                    >
                        North Korea's Lazarus Group Suspected in $31 Million CoinEx Heist <RxOpenInNewWindow />
                    </a>
                </div>
            </div>
            
            <div className="article">
                <div className="article__number">4</div>
                <div className="article__title">
                    <a
                        href="https://www.coindesk.com/tech/2023/10/25/this-cybersecurity-pro-gets-paid-to-hack-ethereum-for-the-good-of-the-network/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        This Cybersecurity Pro Gets Paid to Hack Ethereum - for the Good of the Network <RxOpenInNewWindow />
                    </a>
                </div>
            </div>

            <div className="article">
                <div className="article__number">5</div>
                <div className="article__title">
                    <a
                        href="https://tokenpost.com/Crypto-Losses-Mount-Following-LastPass-2022-Security-Breach-10900"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LastPass Security Breach of 2022: Cryptocurrency Losses, Breach Details, and Warnings <RxOpenInNewWindow />
                    </a>
                </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default NewsSidebarCyber;