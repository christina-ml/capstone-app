import React, { useState } from "react";

const NewColorPalette = ({ currentColor, changeColor }) => {
	const [customColor, setCustomColor] = useState(currentColor);
	const [colors, setColors] = useState([ "#D1345B", "#6DD3CE", "#C8E9A0", "#4366F5", "#1E90FF", "#8599eb", "#F7A278", "#40376E", "#48233C", "#A13D63", "#7798AB", "#C3DBC5", "#E8DCB9", "#F2CEE6", "grey", "#070707", "#FFFFFF", "#EFEFEF"]);

	const handleAddCustomColorToPalette = (e) => {
		e.preventDefault();
		const newColor = customColor;
		setColors([...colors, newColor]);
	}

	const handleColorChange = (e) => {
		e.preventDefault();
		const newColor = e.target.value;
		setCustomColor(newColor);
		changeColor(newColor);
	};

	return (
		<div className="ColoringBook__colorPalette">
			<div className="ColoringBook__colorPalette__custonColor">
				<input
					className="ColoringBook__colorPalette__customColor__newColor"
					onChange={handleColorChange}
					id="customColor"
					type="color"
					value={customColor}
				/>
				<div>
					<button 
						className="ColoringBook__colorPalette__customColor__addToPalette"
						type="button"  
						onClick={handleAddCustomColorToPalette}
					>
						Add to palette
					</button>
				</div>
			</div>
			{colors.map((color) => {
				const activeClass =
					currentColor === color
						? "ColoringBook__colorSwatchActive"
						: "";
				return (
					<div
						onClick={() => {
							changeColor(color);
						}}
					>
						<div
							className={`ColoringBook__colorSwatch ${activeClass}`}
							style={{ backgroundColor: color }}
						></div>
					</div>
				);
			})}
		</div>
	);
};

export default NewColorPalette;
