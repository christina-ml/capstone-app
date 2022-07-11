import React from "react";

const MobileColoring = ({ colorPalette, startColoring }) => {
  return (
    <div>
      <svg width="256" height="256" xmlns="http://www.w3.org/2000/svg">
        <title>MobileColoring</title>
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
              d="M 45.359 29.311 c 7.998 0 14.505 6.507 14.505 14.505 s -6.507 14.505 -14.505 14.505 s -14.505 -6.507 -14.505 -14.505 S 37.361 29.311 45.359 29.311 M 45.359 26.311 c -9.668 0 -17.505 7.837 -17.505 17.505 s 7.837 17.505 17.505 17.505 s 17.505 -7.837 17.505 -17.505 S 55.027 26.311 45.359 26.311 L 45.359 26.311 z"
              onClick={() => startColoring(0)}
              fill={colorPalette[0]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="2"
              stroke-miterlimit="4"
            />
            <path
              id="svg_02"
              d="M 51.257 46.414 c -0.828 0 -1.5 0.671 -1.5 1.5 c 0 0.763 -0.47 1.294 -0.892 1.294 h -7.014 c -0.421 0 -0.891 -0.531 -0.891 -1.294 v -8.195 c 0 -0.762 0.47 -1.293 0.891 -1.293 h 7.014 c 0.422 0 0.892 0.531 0.892 1.293 c 0 0.829 0.672 1.5 1.5 1.5 s 1.5 -0.671 1.5 -1.5 c 0 -2.367 -1.746 -4.293 -3.892 -4.293 h -2.007 v -1.334 c 0 -0.829 -0.671 -1.5 -1.5 -1.5 s -1.5 0.671 -1.5 1.5 v 1.334 h -2.007 c -2.146 0 -3.891 1.926 -3.891 4.293 v 8.195 c 0 2.368 1.746 4.294 3.891 4.294 h 2.007 v 1.334 c 0 0.828 0.671 1.5 1.5 1.5 s 1.5 -0.672 1.5 -1.5 v -1.334 h 2.007 c 2.146 0 3.892 -1.926 3.892 -4.294 C 52.757 47.086 52.085 46.414 51.257 46.414 z"
              onClick={() => startColoring(1)}
              fill={colorPalette[1]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="2"
              stroke-miterlimit="4"
            />
            <path
              id="svg_03"
              d="M 51.973 8.954 H 38.744 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 13.229 c 0.828 0 1.5 0.671 1.5 1.5 S 52.801 8.954 51.973 8.954 z"
              onClick={() => startColoring(2)}
              fill={colorPalette[2]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="2"
              stroke-miterlimit="4"
            />
            <path
              id="svg_04"
              d="M 67.649 0 H 22.351 c -3.008 0 -5.455 2.447 -5.455 5.455 v 79.09 c 0 3.008 2.447 5.455 5.455 5.455 h 45.298 c 3.008 0 5.454 -2.447 5.454 -5.455 V 5.455 C 73.103 2.447 70.657 0 67.649 0 z M 19.896 15.408 h 50.207 v 59.134 H 19.896 V 15.408 z M 22.351 3 h 45.298 c 1.354 0 2.454 1.101 2.454 2.455 v 6.954 H 19.896 V 5.455 C 19.896 4.101 20.998 3 22.351 3 z M 67.649 87 H 22.351 c -1.354 0 -2.455 -1.102 -2.455 -2.455 v -7.003 h 50.207 v 7.003 C 70.103 85.899 69.002 87 67.649 87 z"
              onClick={() => startColoring(3)}
              fill={colorPalette[3]}
              fill-rule="evenodd"
              stroke="#000000"
              stroke-width="2"
              stroke-miterlimit="4"
            />
            <path
              id="svg_05"
              d="M 46.382 83.996 h -2.047 c -0.829 0 -1.5 -0.672 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 2.047 c 0.828 0 1.5 0.672 1.5 1.5 S 47.21 83.996 46.382 83.996 z"
              onClick={() => startColoring(4)}
              fill={colorPalette[4]}
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

export default MobileColoring;
