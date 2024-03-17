import React from 'react';

import Image from 'next/image';

import { Carousel } from '@jfteam/carousel';
import { Box, Stack, type Embla, Title, Text, Button, Group } from '@jfteam/material';

import classes from './ProjectCarousel.module.css';
import { useResponsive } from '@jfteam/hooks';
import { IconCornerDownRight, IconWorldWww } from '@jfteam/icons';
import { IProjectRow } from '@/utils';
import Link from 'next/link';

interface ProjectCarouselProps {
  list: IProjectRow[];
  webSiteLabel: string;
  getEmblaApi: ((embla: Embla) => void) | undefined;
  onIndexChange: (idx: number) => void;
}

export const ProjectCarousel = (props: ProjectCarouselProps) => {
  const { list, webSiteLabel, getEmblaApi, onIndexChange } = props;

  const { isDesktop, isMobile } = useResponsive();

  return (
    <Box className={classes.container}>
      <Carousel
        loop
        rows={list}
        delay={8000}
        getEmblaApi={getEmblaApi}
        onSlideChange={onIndexChange}
        className={classes.carousel}
        withControls={!isDesktop}
      >
        {(row) => (
          <Stack>
            <Box
              h={isMobile ? 210 : 440}
              style={{
                position: 'relative',
              }}
            >
              <Image alt={row.title} src={row.picture} fill style={{ objectFit: 'cover' }} />
            </Box>
            {!isDesktop && (
              <>
                <Stack justify="space-evenly" align="center" h={250} p="md">
                  <Title order={3}> {row.title}</Title>
                  <Text ta="center">{row.description}</Text>

                  <Link href={row.link} target="_blank" style={{ textDecoration: 'none' }}>
                    {webSiteLabel}
                  </Link>
                </Stack>
              </>
            )}
          </Stack>
        )}
      </Carousel>
    </Box>
  );
};
