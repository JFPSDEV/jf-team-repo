import { ReactNode, useRef } from 'react';
import {
  Carousel as MantineCarousel,
  CarouselProps as MantineCarouselProps
} from '@mantine/carousel';

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import Autoplay from 'embla-carousel-autoplay';

interface CarouselProps<T> extends Omit<MantineCarouselProps, 'children'> {
  rows: T[];
  delay?: number;
  children: (row: T, index: number) => ReactNode;
}

export function Carousel<T>(props: CarouselProps<T>) {
  const { rows, children, h, delay, ...other } = props;

  const autoplay = useRef(Autoplay({ delay }));

  return (
    <MantineCarousel
      h={h}
      slideGap='xl'
      withControls
      plugins={delay ? [autoplay.current] : undefined}
      {...other}
    >
      {rows.map((contentItem, index) => (
        <MantineCarousel.Slide key={index} h={h}>
          {children(contentItem, index)}
        </MantineCarousel.Slide>
      ))}
    </MantineCarousel>
  );
}
