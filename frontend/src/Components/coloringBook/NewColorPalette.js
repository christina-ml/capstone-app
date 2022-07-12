import React from 'react';

const NewColorPalette = ({currentColor, changeColor}) => {

    const colors = ['#B22222', 'hotpink', 'orange', '#BDB76B', '#008B8B', '#40E0D0', '#4366F5', '#8599eb', '#1E90FF' , 'grey', 'black', 'white'];

    return(
        <div className="ColoringBook__colorPalette">
            {colors.map(color => { 
                const activeClass = currentColor === color ? "ColoringBook__colorSwatchActive" : "";
                return (
                    <div onClick={() => {changeColor(color)}}>
                        <div className={`ColoringBook__colorSwatch ${activeClass}`}  style={{backgroundColor: color}}></div>
                    </div>
                )
            })}
        </div>
    )
}

export default NewColorPalette;