import React from 'react'

const Coin = ({ coin }) => {
  return (
    <div className="Coin">
        <ul>
            <li>{coin.name} ({coin.symbol})</li>
        </ul>
    </div>
  )
}

export default Coin