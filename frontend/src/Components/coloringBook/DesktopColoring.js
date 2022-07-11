import React from "react";

const DesktopColoring = ({ colorPalette, startColoring }) => {
  return (
    <div>
      <svg width="256" height="256" xmlns="http://www.w3.org/2000/svg">
        <title>DesktopColoring</title>
        <g transform="translate(128 128) scale(0.87 0.87)" display="inline">
          <g
            style={{
              stroke: "none",
              strokeWidth: 0,
              strokeDasharray: "none",
              strokeLinecap: "butt",
              strokeLinejoin: "miter",
              strokeMiterLimit: 10,
              fill: "none",
              fillRule: "nonzero",
              opacity: 1,
            }}
            transform="translate(-144.89999999999998 -144.90000000000003) scale(3.22 3.22)"
          >
            <path
              id="svg_01"
              d="M 86.24 62.996 h -1.321 V 18.034 c 0 -2.575 -2.095 -4.669 -4.67 -4.669 H 9.75 c -2.575 0 -4.669 2.094 -4.669 4.669 v 44.962 H 3.759 C 1.686 62.996 0 64.683 0 66.755 v 1.721 c 0 4.499 3.66 8.158 8.158 8.158 h 73.682 c 4.499 0 8.159 -3.66 8.159 -8.158 v -1.721 C 90 64.683 88.314 62.996 86.24 62.996 z M 8.048 18.034 c 0 -0.939 0.763 -1.702 1.702 -1.702 h 70.499 c 0.939 0 1.703 0.763 1.703 1.702 v 44.709 H 8.048 V 18.034 z M 87.033 68.477 c 0 2.863 -2.33 5.191 -5.192 5.191 H 8.158 c -2.863 0 -5.191 -2.329 -5.191 -5.191 v -1.721 c 0 -0.437 0.355 -0.792 0.792 -0.792 H 86.24 c 0.438 0 0.793 0.355 0.793 0.792 V 68.477 z"
              onClick={() => startColoring(0)}
              fill={colorPalette[0]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="2"
              stroke-miterlimit="4"
            />
            <path
              id="svg_02"
              d="M 50.531 70.978 H 39.469 c -0.82 0 -1.484 -0.664 -1.484 -1.484 c 0 -0.819 0.664 -1.484 1.484 -1.484 h 11.062 c 0.819 0 1.484 0.664 1.484 1.484 C 52.014 70.314 51.35 70.978 50.531 70.978 z"
              onClick={() => startColoring(1)}
              fill={colorPalette[1]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="2"
              stroke-miterlimit="4"
            />
            <path
              id="svg_03"
              d="M 45 25.104 c 7.689 0 13.945 6.256 13.945 13.945 S 52.689 52.994 45 52.994 s -13.945 -6.256 -13.945 -13.945 S 37.31 25.104 45 25.104 M 45 22.137 c -9.34 0 -16.912 7.572 -16.912 16.912 c 0 9.34 7.572 16.912 16.912 16.912 s 16.912 -7.572 16.912 -16.912 C 61.912 29.709 54.34 22.137 45 22.137 L 45 22.137 z"
              onClick={() => startColoring(2)}
              fill={colorPalette[2]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="2"
              stroke-miterlimit="4"
            />
            <path
              id="svg_04"
              d="M 50.698 41.525 c -0.819 0 -1.484 0.664 -1.484 1.484 c 0 0.716 -0.436 1.215 -0.827 1.215 h -6.776 c -0.391 0 -0.826 -0.499 -0.826 -1.215 v -7.917 c 0 -0.716 0.436 -1.215 0.826 -1.215 h 6.776 c 0.391 0 0.827 0.499 0.827 1.215 c 0 0.819 0.664 1.484 1.484 1.484 c 0.819 0 1.484 -0.664 1.484 -1.484 c 0 -2.306 -1.702 -4.183 -3.794 -4.183 h -1.905 v -1.255 c 0 -0.82 -0.664 -1.484 -1.483 -1.484 s -1.484 0.664 -1.484 1.484 v 1.255 h -1.905 c -2.091 0 -3.793 1.876 -3.793 4.183 v 7.917 c 0 2.306 1.702 4.183 3.793 4.183 h 1.905 v 1.254 c 0 0.82 0.664 1.484 1.484 1.484 s 1.483 -0.664 1.483 -1.484 v -1.254 h 1.905 c 2.092 0 3.794 -1.876 3.794 -4.183 C 52.181 42.189 51.517 41.525 50.698 41.525 z"
              onClick={() => startColoring(3)}
              fill={colorPalette[3]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="2"
              stroke-miterlimit="4"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default DesktopColoring;
