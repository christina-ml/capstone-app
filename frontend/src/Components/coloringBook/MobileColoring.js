import React from "react";

const MobileColoring = ({ fillColors, onFill }) => {
  return (
    <div>
      <svg width="256" height="256" xmlns="http://www.w3.org/2000/svg">
        <title>MobileColoring</title>
        <g transform="translate(128 128) scale(0.87 0.87)" display="inline">
          <g
            transform="translate(-144.89999999999998 -144.90000000000003) scale(3.22 3.22)"
          >
            <rect
              id="svg_08"
              onClick={() => onFill(8)}
              fill={fillColors[8]}
              x="19" y="14.35" rx="0" ry="0" width="52" height="61.25" 
              transform=" matrix(1 0 0 1 0 0) "
            />
            <path
              id="svg_01"
              d="M 45.359 27.817 c 8.822 0 16 7.178 16 16 s -7.178 16 -16 16 s -16 -7.178 -16 -16 S 36.536 27.817 45.359 27.817" 
              onClick={() => onFill(0)}
              fill={fillColors[0]}
              fillRule="evenodd"
              stroke="#000000"
              stroke-width="1"
            />
            <path
              id="svg_02"
              d="M 21.542 2.832 h 46.916 C 69.86 2.832 71 3.973 71 5.374 v 7.202 H 19 V 5.374 C 19 3.973 20.14 2.832 21.542 2.832 z"
              onClick={() => onFill(1)}
              fill={fillColors[1]}
              fillRule="evenodd"
              stroke="#000000"
              stroke-width="1"
            />
            <path
              id="svg_03"
              d="M 68.458 87.169 H 21.542 c -1.402 0 -2.542 -1.141 -2.542 -2.543 v -7.253 h 52 v 7.253 C 71 86.028 69.86 87.169 68.458 87.169 z" 
              onClick={() => onFill(2)}
              fill={fillColors[2]}
              fillRule="evenodd"
              stroke="#000000"
              stroke-width="1"
            />
            <path
              id="svg_04"
              d="M 45.359 29.311 c 7.998 0 14.505 6.507 14.505 14.505 s -6.507 14.505 -14.505 14.505 s -14.505 -6.507 -14.505 -14.505 S 37.361 29.311 45.359 29.311 M 45.359 26.311 c -9.668 0 -17.505 7.837 -17.505 17.505 s 7.837 17.505 17.505 17.505 s 17.505 -7.837 17.505 -17.505 S 55.027 26.311 45.359 26.311 L 45.359 26.311 z" 
              onClick={() => onFill(3)}
              fill={fillColors[3]}
              fillRule="evenodd"
              stroke="#000000"
              stroke-width="1"
            />
            <path
              id="svg_05"
              d="M 51.257 46.414 c -0.828 0 -1.5 0.671 -1.5 1.5 c 0 0.763 -0.47 1.294 -0.892 1.294 h -7.014 c -0.421 0 -0.891 -0.531 -0.891 -1.294 v -8.195 c 0 -0.762 0.47 -1.293 0.891 -1.293 h 7.014 c 0.422 0 0.892 0.531 0.892 1.293 c 0 0.829 0.672 1.5 1.5 1.5 s 1.5 -0.671 1.5 -1.5 c 0 -2.367 -1.746 -4.293 -3.892 -4.293 h -2.007 v -1.334 c 0 -0.829 -0.671 -1.5 -1.5 -1.5 s -1.5 0.671 -1.5 1.5 v 1.334 h -2.007 c -2.146 0 -3.891 1.926 -3.891 4.293 v 8.195 c 0 2.368 1.746 4.294 3.891 4.294 h 2.007 v 1.334 c 0 0.828 0.671 1.5 1.5 1.5 s 1.5 -0.672 1.5 -1.5 v -1.334 h 2.007 c 2.146 0 3.892 -1.926 3.892 -4.294 C 52.757 47.086 52.085 46.414 51.257 46.414 z" 
              onClick={() => onFill(4)}
              fill={fillColors[4]}
              fillRule="evenodd"
              stroke="#000000"
              stroke-width="1"
            />
            <path
              id="svg_06"
              d="M 51.973 8.954 H 38.744 c -0.829 0 -1.5 -0.671 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 13.229 c 0.828 0 1.5 0.671 1.5 1.5 S 52.801 8.954 51.973 8.954 z"
              onClick={() => onFill(5)}
              fill={fillColors[5]}
              fillRule="evenodd"
              stroke="#000000"
              stroke-width="1"
            />
            <path
              id="svg_07"
              d="M 67.649 0 H 22.351 c -3.008 0 -5.455 2.447 -5.455 5.455 v 79.09 c 0 3.008 2.447 5.455 5.455 5.455 h 45.298 c 3.008 0 5.454 -2.447 5.454 -5.455 V 5.455 C 73.103 2.447 70.657 0 67.649 0 z M 19.896 15.408 h 50.207 v 59.134 H 19.896 V 15.408 z M 22.351 3 h 45.298 c 1.354 0 2.454 1.101 2.454 2.455 v 6.954 H 19.896 V 5.455 C 19.896 4.101 20.998 3 22.351 3 z M 67.649 87 H 22.351 c -1.354 0 -2.455 -1.102 -2.455 -2.455 v -7.003 h 50.207 v 7.003 C 70.103 85.899 69.002 87 67.649 87 z"
              onClick={() => onFill(6)}
              fill={fillColors[6]}
              fillRule="evenodd"
              stroke="#000000"
              stroke-width="1"
            />
            <path
              id="svg_08"
              d="M 46.382 83.996 h -2.047 c -0.829 0 -1.5 -0.672 -1.5 -1.5 s 0.671 -1.5 1.5 -1.5 h 2.047 c 0.828 0 1.5 0.672 1.5 1.5 S 47.21 83.996 46.382 83.996 z" 
              onClick={() => onFill(7)}
              fill={fillColors[7]}
              fillRule="evenodd"
              stroke="#000000"
              stroke-width="1"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default MobileColoring;
