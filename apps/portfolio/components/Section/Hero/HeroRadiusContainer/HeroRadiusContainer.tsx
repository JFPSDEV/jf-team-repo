import React, { SVGProps } from 'react';

interface HeroRadiusContainerProps extends SVGProps<SVGSVGElement> {}

export const HeroRadiusContainer = (props: HeroRadiusContainerProps) => {
  const { width = '100%', height = 150, color = 'white', className, ...svgProps } = props;
  return (
    <svg
      viewBox="0 0 1870.000000 155.000000"
      preserveAspectRatio="none"
      width={width}
      height={height}
      className={className}
      {...svgProps}
    >
      <g transform="translate(0.000000,155.000000) scale(0.100000,-0.100000)" stroke="none">
        <path
          d="M8645 1543 c-2868 -34 -5640 -326 -7189 -758 -685 -191 -1123 -391
-1337 -612 -67 -69 -128 -157 -116 -169 2 -2 4210 -3 9351 -2 l9347 3 -41 64
c-137 212 -462 402 -997 585 -1731 590 -5224 934 -9018 889z"
        />
      </g>
    </svg>
  );
};
