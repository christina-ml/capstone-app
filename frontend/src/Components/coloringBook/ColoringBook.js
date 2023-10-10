import React, { useState } from "react";

import MobileColoring from "./MobileColoring";
import NewColorPalette from "./NewColorPalette";

import './ColoringBook.scss';
import NftColoring from "./NftColoring";

const ColoringBook = () => {
  const [fillColors, setFillColors] = useState(Array(30).fill('white'));
  const [currentColor, setCurrentColor] = useState('white');

  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0);
    newFillColors[i] = currentColor;
    setFillColors(newFillColors);
  }

  return (
    <div className="ColoringBook">
      <div className="ColoringBook__desktop">
      <h1>Crypto Coloring</h1>
        <NftColoring fillColors={fillColors} onFill={onFillColor}/>
      </div>
      <div className="ColoringBook__mobile">
        <h1>Crypto Coloring</h1>
        <MobileColoring fillColors={fillColors} onFill={onFillColor} />
      </div>
      <NewColorPalette currentColor={currentColor} changeColor={setCurrentColor}/>
    </div>
  );
};

export default ColoringBook;
