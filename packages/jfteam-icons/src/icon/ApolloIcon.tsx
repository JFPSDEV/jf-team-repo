import React from 'react';

import type { IconProps } from '../types';

interface ApolloIconProps extends IconProps {}

export const ApolloIcon = (props: ApolloIconProps) => {
  const { size, color, ...other } = props;

  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width={size || '737px'}
      height={size || '737px'}
      viewBox='0 0 737 737'
      preserveAspectRatio='xMidYMid meet'
      {...other}
    >
      <g
        transform='translate(0.000000,737.000000) scale(0.100000,-0.100000)'
        fill={color || '#2F1B88'}
        stroke='none'
      >
        <path
          d='M1910 7350 c-190 -4 -379 -13 -421 -19 -279 -38 -415 -78 -611 -178
-147 -75 -264 -160 -383 -278 -252 -253 -397 -558 -450 -948 -31 -227 -37
-700 -32 -2486 4 -1760 6 -1831 42 -2061 81 -521 376 -934 835 -1169 169 -87
356 -140 615 -173 146 -19 4214 -19 4360 0 449 58 734 189 1005 461 276 278
409 571 462 1021 10 93 13 513 13 2165 0 2170 1 2139 -46 2380 -81 418 -316
774 -661 1002 -243 160 -502 243 -858 274 -153 13 -3362 20 -3870 9z m2095
-1011 c33 -5 91 -14 129 -19 38 -6 83 -14 100 -19 17 -5 54 -15 81 -21 118
-26 145 -34 335 -107 198 -75 453 -219 635 -358 l121 -92 81 5 c61 3 95 0 140
-14 120 -38 223 -178 223 -304 0 -42 -22 -124 -44 -165 -24 -46 -90 -109 -143
-136 -41 -21 -61 -24 -143 -23 -112 0 -154 17 -230 93 -72 72 -91 125 -91 247
1 110 0 112 -64 161 -43 33 -233 163 -238 163 -2 0 -52 27 -111 60 -59 33
-111 60 -114 60 -4 1 -25 9 -47 20 -22 11 -47 19 -55 20 -9 0 -20 4 -25 9 -6
5 -26 14 -45 20 -19 5 -62 20 -95 31 -208 74 -578 128 -794 117 -566 -30 -982
-181 -1426 -515 -87 -66 -341 -323 -412 -417 -100 -133 -187 -273 -251 -405
-110 -224 -158 -367 -211 -630 -19 -95 -41 -325 -41 -432 0 -157 42 -467 83
-618 113 -419 323 -777 635 -1085 196 -193 387 -329 632 -451 119 -59 177 -84
215 -94 17 -5 62 -19 100 -33 195 -67 509 -117 735 -117 231 0 574 57 763 126
23 8 58 20 77 26 19 5 39 14 44 19 6 5 16 9 23 9 18 0 232 106 313 155 178
107 323 220 471 368 241 239 419 509 539 817 47 119 62 164 89 270 46 184 81
444 81 605 -1 159 -43 481 -80 605 -5 19 -10 61 -10 93 0 54 3 62 34 93 31 31
39 34 94 34 44 0 66 -5 84 -20 29 -22 62 -100 78 -180 43 -228 59 -351 65
-520 14 -402 -34 -683 -190 -1110 -17 -47 -99 -217 -137 -285 -92 -163 -263
-400 -367 -508 -83 -87 -211 -211 -251 -243 -19 -16 -37 -31 -40 -34 -20 -22
-242 -177 -295 -206 -11 -6 -45 -25 -75 -43 -96 -55 -341 -171 -360 -171 -6 0
-43 -12 -83 -26 -113 -41 -307 -89 -472 -118 -186 -32 -650 -30 -815 4 -30 7
-89 19 -130 27 -112 22 -299 75 -357 99 -17 8 -34 14 -38 14 -19 0 -269 117
-365 171 -30 17 -71 41 -90 53 -19 12 -60 39 -92 59 -187 119 -453 366 -602
558 -95 123 -111 146 -188 274 -141 236 -233 450 -294 685 -14 52 -29 109 -35
126 -5 17 -13 62 -19 100 -5 38 -13 95 -19 127 -31 180 -21 596 19 807 12 58
25 126 30 153 5 26 13 62 19 80 6 17 18 59 27 92 10 33 33 101 52 150 33 89
40 104 101 236 68 149 223 385 362 554 65 79 296 302 379 366 301 233 581 375
950 483 115 34 348 76 480 86 128 10 484 3 565 -11z m47 -1326 c14 -16 36 -65
73 -163 49 -128 60 -156 67 -165 4 -5 8 -16 8 -25 0 -8 6 -26 13 -40 7 -14 24
-54 37 -90 13 -36 30 -76 37 -90 7 -14 13 -32 13 -41 0 -8 4 -19 8 -25 8 -9
31 -66 96 -241 8 -21 26 -67 41 -103 15 -36 46 -117 70 -180 24 -63 48 -128
55 -145 7 -16 16 -39 21 -50 8 -20 46 -120 113 -295 20 -52 41 -104 46 -115 5
-11 25 -63 45 -115 20 -52 42 -111 50 -130 7 -19 24 -62 36 -95 13 -33 27 -64
31 -69 4 -6 8 -16 8 -24 0 -8 7 -28 15 -45 59 -128 68 -181 33 -191 -57 -15
-546 -1 -563 16 -4 4 -27 62 -50 130 -67 191 -67 192 -77 213 -4 11 -12 34
-18 50 -5 17 -24 73 -43 125 -18 52 -46 131 -61 175 -15 44 -34 94 -42 112 -8
17 -14 36 -14 42 0 6 -4 19 -10 29 -5 9 -20 51 -34 92 -14 41 -35 100 -46 130
-12 30 -32 89 -46 130 -13 41 -28 84 -33 95 -5 11 -20 49 -32 85 -19 58 -94
272 -135 386 -9 23 -23 49 -32 58 -16 14 -19 10 -41 -52 -12 -37 -27 -76 -32
-87 -5 -11 -20 -51 -34 -90 -14 -38 -29 -79 -34 -90 -5 -11 -17 -42 -26 -70
-19 -57 -54 -150 -66 -180 -5 -11 -16 -42 -25 -70 -9 -27 -22 -63 -30 -80 -30
-67 -77 -212 -78 -240 l-1 -30 282 -5 c169 -3 286 -9 291 -15 5 -5 26 -59 46
-120 21 -60 40 -117 43 -125 57 -150 63 -184 37 -194 -9 -3 -204 -6 -433 -6
-475 0 -434 8 -465 -90 -26 -82 -83 -229 -109 -280 l-22 -45 -265 -3 c-146 -1
-275 0 -287 3 -37 9 -34 32 17 150 5 11 25 63 45 115 60 158 97 254 106 275 5
11 24 63 44 115 20 52 49 127 65 165 16 39 40 100 54 138 14 37 38 97 52 135
14 37 29 76 34 87 4 11 30 79 58 150 28 72 76 195 107 275 32 80 68 174 82
210 13 36 30 81 38 100 7 19 27 69 43 110 36 88 72 182 103 265 12 33 32 84
45 113 l24 52 318 0 c291 0 320 -2 334 -17z'
        />
      </g>
    </svg>
  );
};
