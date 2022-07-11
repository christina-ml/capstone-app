import React, { useState } from "react";

import DesktopColoring from "./DesktopColoring";
import MobileColoring from "./MobileColoring";

import './ColoringBook.scss';

const ColoringBook = () => {
  const [colorPalette, setColorPalette] = useState(Array(5).fill("green"));
  const [color, setColor] = useState("red");

  const startColoring = (i) => {
    let newColors = colorPalette.slice(0);
    newColors[i] = color;
    setColorPalette(newColors);
  };

  return (
    <div className="ColoringBook">
      <div className="ColoringBook__desktop">
        <DesktopColoring
          colorPalette={colorPalette}
          startColoring={startColoring}
        />
      </div>
      <div className="ColoringBook__mobile">
        <MobileColoring
          colorPalette={colorPalette}
          startColoring={startColoring}
        />
      </div>
    </div>
  );
};

export default ColoringBook;
