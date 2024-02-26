import React from 'react';

import Image from 'next/image';

import { Carousel } from '@jfteam/carousel';
import { Box, Stack, type Embla, Title, Text, Button } from '@jfteam/material';

import classes from './ProjectCarousel.module.css';
import { useResponsive } from '@jfteam/hooks';
import { IconWorldWww } from '@jfteam/icons';
import { IProjectRow } from '@/utils';

interface ProjectCarouselProps {
  list: IProjectRow[];
  getEmblaApi: ((embla: Embla) => void) | undefined;
  onIndexChange: (idx: number) => void;
}

export const ProjectCarousel = (props: ProjectCarouselProps) => {
  const { list, getEmblaApi, onIndexChange } = props;

  const { isDesktop } = useResponsive();

  return (
    <Box className={classes.container}>
      <Carousel
        loop
        rows={list}
        delay={5000}
        getEmblaApi={getEmblaApi}
        onSlideChange={onIndexChange}
        className={classes.carousel}
        withControls={!isDesktop}
        withIndicators={!isDesktop}
      >
        {(row) => (
          <Stack mb="xl">
            <Box h={430} style={{ position: 'relative' }}>
              <Image
                alt={row.title}
                src={row.picture}
                layout="fill"
                objectFit="cover"
                className={classes.websiteImage}
              />
            </Box>
            {!isDesktop && (
              <>
                <Stack justify="space-evenly" h={200} p="md">
                  <Title order={3}> {row.title}</Title>
                  <Text>{row.description}</Text>
                  <Button
                    variant="subtle"
                    component="a"
                    href={row.link}
                    target="_blank"
                    style={{ objectFit: 'contain', width: 'fit-content' }}
                  >
                    <IconWorldWww />
                    &nbsp; Voir le site
                  </Button>
                </Stack>
              </>
            )}
          </Stack>
        )}
      </Carousel>
    </Box>
  );
};
