import React, { useState } from "react";

import DesktopColoring from "./DesktopColoring";
import MobileColoring from "./MobileColoring";
import NewColorPalette from "./NewColorPalette";

import './ColoringBook.scss';

const ColoringBook = () => {
  const [fillColors, setFillColors] = useState(Array(16).fill('white'));
  const [currentColor, setCurrentColor] = useState('white');

  const onFillColor = (i) => {
    let newFillColors = fillColors.slice(0);
    newFillColors[i] = currentColor;
    setFillColors(newFillColors);
  }

  return (
    <div className="ColoringBook">
      <div className="ColoringBook__desktop">
        <DesktopColoring fillColors={fillColors} onFill={onFillColor} />
      </div>
      <div className="ColoringBook__mobile">
        <MobileColoring fillColors={fillColors} onFill={onFillColor} />
      </div>
      
      <NewColorPalette currentColor={currentColor} changeColor={setCurrentColor}/>
    </div>
  );
};

export default ColoringBook;