import React, { useRef, useEffect, ComponentType, ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';
type TimeAnime = 'start' | 'end';

interface ICoordinate {
  x?: number | string;
  y?: number | string;
}

type ComponentProps<P> = P extends ComponentType<infer T> ? T : never;

interface ExampleProps<C extends ComponentType<any>> {
  component: C;
  direction?: Direction;
  duration?: number;
  startPosition?: number | string;
  endPosition?: number;
  startOpacity?: number;
  endOpacity?: number;
  startTrigger?: number | string;
  children: ReactNode;
  markers?: boolean;
  trigger?: undefined;
}

export const Morph = <C extends ComponentType<any>>(
  props: ExampleProps<C> & ComponentProps<C>
) => {
  const {
    component: Component,
    direction = 'up',
    startPosition = 190,
    endPosition = 0,
    startOpacity = 0,
    endOpacity = 1,
    duration = 0.5,
    startTrigger = 'top 100%',
    markers = false,
    trigger,
    ...other
  } = props;

  const conf: Record<Direction, Record<TimeAnime, ICoordinate>> = {
    up: { start: { y: startPosition }, end: { y: endPosition } },
    down: { start: { y: -startPosition }, end: { y: endPosition } },
    left: { start: { x: startPosition }, end: { x: endPosition } },
    right: { start: { x: -startPosition }, end: { x: endPosition } }
  };

  const ref = useRef<ComponentProps<C>>(null);

  useEffect(() => {
    const el = ref?.current;

    if (el) {
      const test: Direction = direction;
      const test2 = conf;
      const position = conf[direction as Direction];
      // const animation = gsap.fromTo(
      //   el,
      //   { opacity: startOpacity, ...position.start, duration },
      //   {
      //     opacity: endOpacity,
      //     ...position.end,
      //     duration,
      //     ...(trigger
      //       ? {
      //           [trigger]: {
      //             trigger: el,
      //             start: startTrigger,
      //             markers: markers,
      //             toggleActions: 'play none none reverse'
      //           }
      //         }
      //       : {})
      //   }
      // );

      // return () => {
      //   animation.kill();
      // };
    }
  }, [ref]);

  return <Component ref={ref} {...other} />;
};
