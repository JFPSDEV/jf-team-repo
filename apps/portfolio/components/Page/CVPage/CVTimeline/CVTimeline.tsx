import React from 'react';

import { Timeline, type TimelineProps, Card, CardProps, Box, BoxProps, cx } from '@jfteam/material';

import classes from './CVTimeline.module.css';

type TMode = 'Right' | 'Left';

export interface TriangleProps extends React.SVGProps<SVGSVGElement> {
  direction: TMode;
  color?: string;
  borderColor?: string;
  borderWidth?: number;
  h: number;
  w: number;
  style?: React.CSSProperties;
}

export const Triangle = ({
  direction = 'Right',
  color = 'white',
  borderColor = 'white',
  h,
  w,
  borderWidth = 0,

  style,
  ...svgProps
}: TriangleProps) => {
  let points;
  let borderPoints;
  let sideBorderPoints;

  if (direction === 'Left') {
    points = `0,0 ${w},${h / 2} 0,${h}`;
    borderPoints = `0,0 ${w - borderWidth},${h / 2} 0,${h}`;
    sideBorderPoints = `0,0 ${borderWidth},${h / 2} 0,${h}`;
  } else {
    points = `0,${h / 2} ${w},${h} ${w},0`;
    borderPoints = `${borderWidth / 2},${h / 2} ${w},${h} ${w - borderWidth / 2},0`;
    sideBorderPoints = `${w},${h / 2} ${w - borderWidth},${h} ${w},${0}`;
  }

  return (
    <svg
      style={{
        width: `${w}px`,
        height: `${h}px`,
        ...style,
      }}
      {...svgProps}
    >
      <polygon points={points} fill={color} strokeWidth={0} />
      <polygon points={borderPoints} fill="none" strokeWidth={borderWidth} stroke={borderColor} />
      <polygon points={sideBorderPoints} fill="none" strokeWidth={borderWidth} stroke={'white'} />
    </svg>
  );
};

const width = 18;
const height = 20;

export interface CVTimelineCardProps extends CardProps {
  direction: TMode;
  borderWidth?: number;
  borderColor?: string;
}

export const CVTimelineCard = ({
  direction,
  bg,
  style,
  borderWidth = 1,
  borderColor,
  className,
  ...cardProps
}: CVTimelineCardProps) => (
  <Box className={classes.cardContainer}>
    <Card bg={bg} className={cx(className, classes.card)} {...cardProps} />
    <Triangle
      color={bg ? `${bg}` : undefined}
      direction={direction}
      borderWidth={1}
      borderColor={'var(--mantine-color-gray-3)'}
      h={height}
      w={width}
      style={{
        position: 'absolute',
        top: 15,
        ...(direction === 'Right' ? { left: -width + 1 } : { right: -width + 1 }),
      }}
    />
  </Box>
);

const bulletSize = 50;

export const CVTimeline = (props: TimelineProps) => {
  return (
    <Timeline
      bulletSize={bulletSize}
      lineWidth={5}
      color="var(--orange-main)"
      w="100%"
      {...props}
    />
  );
};

CVTimeline.Item = Timeline.Item;
CVTimeline.bulletSize = bulletSize;
CVTimeline.iconSize = 25;
CVTimeline.Card = CVTimelineCard;
