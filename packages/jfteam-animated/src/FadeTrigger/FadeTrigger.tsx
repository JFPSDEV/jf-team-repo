import React, { useRef, useEffect, ReactNode } from 'react';

import gsap from 'gsap';
import { ScrollTrigger as GsapScrollTrigger } from 'gsap/ScrollTrigger';

import { ETrigger } from '..';
import { useWindowSize } from '../hooks';

gsap.registerPlugin(GsapScrollTrigger);

type Direction = 'up' | 'down' | 'left' | 'right';
type TimeAnime = 'start' | 'end';

interface ICoordinate {
  x?: number | string;
  y?: number | string;
}

interface FadeTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: Direction;
  duration?: number;
  startPosition?: number | string;
  endPosition?: number;
  startOpacity?: number;
  endOpacity?: number;
  startTrigger?: number | string;
  trigger?: ETrigger;
  children: ReactNode;
  markers?: boolean;
}

export const FadeTrigger = (props: FadeTriggerProps) => {
  const {
    direction = 'up',
    startPosition = 190,
    endPosition = 0,
    startOpacity = 0,
    endOpacity = 1,
    duration = 0.5,
    startTrigger = 'top 100%',
    markers = false,
    trigger,
    ...divProps
  } = props;

  const { loading, isMobile } = useWindowSize();

  const ref = useRef<HTMLDivElement>(null);

  const conf: Record<Direction, Record<TimeAnime, ICoordinate>> = {
    up: { start: { y: startPosition }, end: { y: endPosition } },
    down: { start: { y: -startPosition }, end: { y: endPosition } },
    left: { start: { x: startPosition }, end: { x: endPosition } },
    right: { start: { x: -startPosition }, end: { x: endPosition } }
  };

  useEffect(() => {
    const el = ref?.current;

    if (!loading && el) {
      const position = conf[direction];
      const animation = gsap.fromTo(
        el,
        { opacity: startOpacity, ...position.start, duration },
        {
          opacity: endOpacity,
          ...position.end,
          duration,
          ...(trigger && !isMobile
            ? {
                [trigger]: {
                  trigger: el,
                  start: startTrigger,
                  markers: markers,
                  toggleActions: 'play none none reverse'
                }
              }
            : {})
        }
      );

      return () => {
        animation.kill();
      };
    }
  }, [loading, isMobile]);

  return <div ref={ref} {...divProps} />;
};
