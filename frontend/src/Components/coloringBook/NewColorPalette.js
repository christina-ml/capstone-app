import React, { useState } from "react";

const NewColorPalette = ({ currentColor, changeColor }) => {
	const [customColor, setCustomColor] = useState(currentColor);

	const colors = [
		"#D1345B",
        "#6DD3CE",
        "#C8E9A0",
		"#4366F5",
		"#1E90FF",
		"#8599eb",
        "#F7A278",
        "#40376E",
        "#48233C",
        "#A13D63",
        "#7798AB",
        "#C3DBC5",
        "#E8DCB9",
        "#F2CEE6",
		"grey",
		"#070707",
		"#FFFFFF",
        "#EFEFEF"
	];

	const handleColorChange = (e) => {
		e.preventDefault();
		const newColor = e.target.value;
		setCustomColor(newColor);
		changeColor(newColor);
	};

	return (
		<div className="ColoringBook__colorPalette">
			<input
				className="ColoringBook__colorPalette__customColor"
				onChange={handleColorChange}
				id="customColor"
				type="color"
				value={customColor}
			/>
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
