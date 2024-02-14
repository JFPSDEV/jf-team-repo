import React from 'react';

import type { IconProps } from '../types';

interface NewTabIconProps extends IconProps {}

export const NewTabIcon = (props: NewTabIconProps) => {
  const { size, color, className } = props;

  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width={size || '308px'}
      height={size || '308px'}
      viewBox='0 0 308.000000 308.000000'
      className={className}
    >
      <g
        transform='translate(0.000000,308.000000) scale(0.100000,-0.100000)'
        fill={color}
        stroke='none'
      >
        <path
          d='M252 3069 c-56 -11 -137 -56 -169 -94 -15 -16 -38 -55 -52 -85 l-26
-55 0 -1295 0 -1295 33 -67 c36 -73 79 -114 159 -151 l48 -22 1295 0 1295 0
56 26 c71 33 125 87 158 158 l26 56 3 442 3 443 -105 0 -106 0 0 -420 c0 -303
-3 -426 -12 -445 -26 -58 42 -55 -1317 -55 -948 0 -1256 3 -1276 12 -58 26
-55 -42 -55 1318 0 1360 -3 1292 55 1318 19 9 153 12 495 12 l470 0 0 105 0
105 -467 -1 c-258 -1 -487 -5 -511 -10z'
        />
        <path
          d='M2260 2975 l0 -105 232 0 233 0 -935 -935 -935 -935 73 -72 72 -73
935 935 935 935 0 -233 0 -232 105 0 106 0 -3 373 c-3 419 -3 416 -75 436 -23
7 -176 11 -390 11 l-353 0 0 -105z'
        />
      </g>
    </svg>
  );
};
