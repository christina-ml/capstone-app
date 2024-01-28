import React, { useState } from "react";

import MobileColoring from "./MobileColoring";
import NewColorPalette from "./NewColorPalette";

import './ColoringBook.scss';
import NftColoring from "./NftColoring";

const ColoringBook = () => {
  const [fillColors, setFillColors] = useState(Array(30).fill('white'));
  const [currentColor, setCurrentColor] = useState('black');

  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0);
    newFillColors[i] = currentColor;
    setFillColors(newFillColors);
  }

  return (
    <div className="ColoringBook">
      <div className="ColoringBook__desktop">
      <h1>Crypto Coloring</h1>
        <span>Color your own NFT!</span>
        <h4>CryptoTalk Goat #001</h4>
        <NftColoring fillColors={fillColors} onFill={onFillColor}/>
      </div>
      <div className="ColoringBook__mobile">
        <h1>Crypto Coloring</h1>
        <span>Crypto for mobile!</span>
        <MobileColoring fillColors={fillColors} onFill={onFillColor} />
      </div>
      <NewColorPalette currentColor={currentColor} changeColor={setCurrentColor}/>
      <h4>Take a screenshot when finished to save your NFT!</h4>
    </div>
  );
};

export default ColoringBook;
