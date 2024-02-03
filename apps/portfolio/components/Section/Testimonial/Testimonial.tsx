import React, { useEffect, useState } from 'react';

import { Carousel } from '@jfteam/carousel';
import {
  Box,
  type Embla,
  cx,
  Flex,
  Group,
  Button,
  ActionIcon,
  Stack,
  Title,
} from '@jfteam/material';
import { Section } from '../Section';
import { TestimonialCard } from './TestimonialCard/TestimonialCard';

import { type StaticImageData } from 'next/image';

import alexisPicture from '../../../public/images/alexis-filia.jpeg';
import tonyPicture from '../../../public/images/tony-maublanc.jpeg';
import { IconChevronLeft, IconChevronRight } from '@jfteam/icons';

import classes from './Testimonial.module.css';

export interface TTestimonial {
  id: string;
  title: string;
  subTitle: string;
  link: string;
  description: string;
  picture: StaticImageData;
  rating: number;
}

const list: TTestimonial[] = [
  {
    id: '1',
    title: 'Alexis Filia',
    subTitle: 'Co fondateur de dots',
    link: 'https://www.linkedin.com/in/alexis-filia/?originalSubdomain=fr',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    picture: alexisPicture,
    rating: 5,
  },
  {
    id: '2',
    title: 'Tony Maublanc',
    subTitle: 'Responsable de projet',
    link: 'https://www.linkedin.com/in/tony-maublanc-45b383105/?originalSubdomain=fr',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    picture: tonyPicture,
    rating: 5,
  },
];

interface TestimonialProps {}

export const Testimonial = (props: TestimonialProps) => {
  const {} = props;

  const [embla, setEmbla] = useState<Embla | null>(null);

  return (
    <Section isDashed={false} py={125} px="md" bg="#f0f0ff">
      <Stack gap={30} px="md">
        <Title order={2}>
          Quelque retour <br /> sur mes projets
        </Title>

        <Group justify="space-between">
          <ActionIcon
            className={classes.carouselButton}
            variant="outline"
            onClick={() => embla?.scrollPrev()}
          >
            <IconChevronLeft className={cx(classes.icons, classes.iconLeft)} />
          </ActionIcon>
          <Carousel
            loop
            w="80%"
            rows={list}
            delay={3000}
            getEmblaApi={setEmbla}
            className={classes.carousel}
            withControls={false}
          >
            {(row) => (
              <Box style={{ height: 340 }}>
                <TestimonialCard row={row} />
              </Box>
            )}
          </Carousel>
          <ActionIcon
            className={classes.carouselButton}
            variant="outline"
            onClick={() => embla?.scrollNext()}
          >
            <IconChevronRight className={cx(classes.icons, classes.iconRight)} />
          </ActionIcon>
        </Group>
      </Stack>
    </Section>
  );
};
