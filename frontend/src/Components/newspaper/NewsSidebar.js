import React from 'react';

import './NewsSidebar.scss';

const NewsSidebar = () => {
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
                    Bitcoin Mining Major Riot Blockchain Misses Analyst Estimates for Q3 Earnings
                </div>
            </div>
            
            <div className="article">
                <div className="article__number">2</div>
                <div className="article__title">
                    First Mover Asia: A Good Week for Exchange Tokens, Except FTT; Solana Continues Falling
                </div>
            </div>
            
            <div className="article">
                <div className="article__number">3</div>
                <div className="article__title">
                    Litecoin Mining Difficulty Is Hitting New Highs, Foundation Says
                </div>
            </div>
            
            <div className="article">
                <div className="article__number">4</div>
                <div className="article__title">
                    Ethereum Co-Founder Di Iorio Unveils New Project to Bring Blockchain Computers to a Wider Audience
                </div>
            </div>
            
            <div className="article">
                <div className="article__number">5</div>
                <div className="article__title">
                    Bernstein Says Polygon Blockchain Is the Web3 King
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default NewsSidebar;