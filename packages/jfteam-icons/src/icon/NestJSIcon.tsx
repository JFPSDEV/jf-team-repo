import React from 'react';

import type { IconProps } from '../types';

interface NestJsIconProps extends IconProps {}

export const NestJsIcon = (props: NestJsIconProps) => {
  const { size, color = '#EC2844', ...other } = props;

  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width={size || '737px'}
      height={size || '737px'}
      viewBox='0 0 737 737'
      {...other}
    >
      <g
        transform='translate(0.000000,737.000000) scale(0.100000,-0.100000)'
        fill={color}
        stroke='none'
      >
        <path
          d='M1485 7355 c-55 -8 -122 -19 -150 -25 -27 -7 -63 -12 -79 -11 -15 0
-41 -6 -57 -15 -16 -8 -34 -12 -39 -9 -5 3 -11 1 -14 -4 -8 -13 -65 -24 -116
-23 -33 1 -39 -1 -21 -6 23 -7 22 -9 -20 -27 -52 -23 -262 -136 -269 -145 -3
-3 -34 -27 -70 -52 -71 -51 -257 -238 -305 -306 -16 -24 -39 -56 -51 -70 -82
-106 -184 -331 -224 -497 -68 -283 -72 -471 -67 -2710 5 -2098 0 -1985 89
-2305 30 -106 112 -292 171 -385 175 -278 448 -507 746 -627 144 -58 266 -87
476 -116 120 -16 286 -17 2200 -17 2277 0 2191 -2 2452 61 449 108 828 403
1032 804 97 190 145 349 178 585 17 122 18 262 18 2230 0 1974 -1 2108 -18
2239 -51 389 -207 716 -462 971 -40 40 -58 55 -150 131 -72 58 -301 194 -328
194 -6 0 -18 6 -26 13 -9 7 -54 23 -101 36 -47 12 -96 28 -110 34 -14 6 -36
11 -50 13 -23 1 -126 18 -270 44 -90 15 -4240 11 -4365 -5z m2821 -750 c101
-42 204 -154 204 -222 0 -50 -12 -66 -98 -132 -167 -128 -213 -202 -220 -349
-5 -107 -15 -113 -50 -31 -19 45 -22 68 -19 134 3 68 9 92 42 160 35 72 39 88
39 160 1 97 -27 166 -94 233 -45 44 -45 56 0 65 44 9 156 -1 196 -18z m453
-100 c169 -81 359 -238 448 -370 238 -353 239 -800 4 -1148 -155 -230 -397
-391 -668 -443 -42 -8 -78 -16 -80 -18 -13 -12 153 -31 272 -31 150 0 222 13
356 61 285 103 518 341 617 629 24 71 52 202 52 245 0 16 4 30 9 30 14 0 114
-113 194 -219 197 -262 393 -640 493 -951 203 -629 191 -1227 -36 -1795 -64
-161 -284 -555 -309 -555 -4 0 -8 91 -8 203 0 193 -23 439 -43 460 -4 5 -13
-20 -19 -55 -61 -316 -230 -689 -435 -961 -90 -120 -210 -251 -314 -343 -103
-91 -260 -209 -268 -202 -2 3 22 47 55 99 100 159 180 327 243 509 31 92 90
312 84 317 -2 2 -16 -18 -31 -44 -115 -200 -355 -471 -560 -633 -297 -235
-653 -401 -1019 -475 -103 -21 -287 -44 -304 -37 -7 2 33 29 90 59 211 112
405 254 573 419 85 84 235 254 235 267 0 4 -37 -7 -82 -24 -140 -53 -296 -98
-449 -129 -217 -45 -230 -41 -123 36 359 256 586 700 588 1149 1 141 -11 285
-24 285 -4 0 -13 -27 -19 -61 -46 -232 -194 -505 -373 -687 -217 -221 -468
-358 -764 -418 -124 -25 -397 -26 -511 -1 -185 40 -469 149 -481 185 -5 15 48
38 109 47 73 11 74 15 9 84 -183 191 -254 486 -166 685 32 72 111 155 182 191
114 58 282 40 332 -35 28 -42 25 -80 -13 -171 -32 -74 -31 -112 1 -177 48 -98
172 -172 300 -180 l72 -4 39 58 c52 76 80 131 114 224 15 41 31 74 35 73 13
-3 22 -76 23 -175 1 -49 5 -88 10 -88 28 0 150 167 199 273 l26 57 46 0 c63 0
155 -46 208 -103 40 -44 42 -45 42 -21 0 90 -82 344 -165 511 -246 496 -697
833 -1258 940 -128 25 -472 24 -607 0 -80 -15 -98 -22 -115 -44 -11 -15 -47
-63 -80 -107 -71 -96 -100 -109 -111 -50 -4 20 -4 74 -1 120 3 46 4 84 2 84
-2 0 -24 -29 -50 -65 -50 -71 -79 -93 -92 -73 -4 7 -8 50 -9 95 l-1 83 -70 35
c-103 51 -186 152 -207 250 -5 21 -18 37 -45 52 -61 35 -153 124 -172 168 -23
49 -24 103 -4 178 21 81 50 132 108 194 63 67 127 98 252 122 183 36 314 86
438 169 40 26 141 116 225 199 96 95 185 173 236 208 123 81 335 180 441 205
453 107 897 105 1344 -6 80 -20 166 -44 191 -55 111 -46 283 -109 287 -105 3
3 0 20 -5 38 -28 90 -21 183 20 267 28 59 96 131 161 173 89 55 129 90 162
143 35 54 65 141 65 187 0 36 10 35 99 -7z'
        />
      </g>
    </svg>
  );
};
