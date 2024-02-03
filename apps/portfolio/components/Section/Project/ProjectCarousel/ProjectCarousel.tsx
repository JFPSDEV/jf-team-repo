import React from 'react';

import Image from 'next/image';

import { Carousel } from '@jfteam/carousel';
import { Box, type Embla } from '@jfteam/material';

import { TProject } from '../Project';
import classes from './ProjectCarousel.module.css';

interface ProjectCarouselProps {
  list: TProject[];
  getEmblaApi: ((embla: Embla) => void) | undefined;
  onIndexChange: (idx: number) => void;
}

export const ProjectCarousel = (props: ProjectCarouselProps) => {
  const { list, getEmblaApi, onIndexChange } = props;

  return (
    <Box className={classes.container}>
      <Carousel
        loop
        rows={list}
        delay={5000}
        withControls={false}
        getEmblaApi={getEmblaApi}
        onSlideChange={onIndexChange}
        className={classes.carousel}
      >
        {(row) => (
          <Box style={{ height: 440 }}>
            <Image
              alt={row.title}
              src={row.picture.src}
              layout="fill"
              objectFit="cover"
              className={classes.websiteImage}
              // width={row.picture.width}
              // height={row.picture.height}
            />
          </Box>
        )}
      </Carousel>
    </Box>
  );
};
