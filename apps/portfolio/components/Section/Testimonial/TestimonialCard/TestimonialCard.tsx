import React from 'react';

import Image from 'next/image';

import classes from './TestimonialCard.module.css';

import { Grid, Box, Stack, Text, Title, Rating, Flex } from '@jfteam/material';
import { TTestimonial } from '../Testimonial';

interface TestimonialCardProps {
  row: TTestimonial;
}

export const TestimonialCard = ({ row }: TestimonialCardProps) => {
  const { title, subTitle, description, picture, link, rating } = row;

  return (
    <Box p="xl" className={classes.container}>
      <Grid gutter="xl">
        <Grid.Col span={{ base: 12, sm: 4 }}>
          <Box h={270} className={classes.pictureContainer}>
            <Image
              src={picture.src}
              alt={title}
              layout="fill"
              objectFit="cover"
              className={classes.testimonialPicture}
            />
          </Box>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 8 }}>
          <Flex justify="center" direction="column" h={270} gap="xl">
            <Stack>
              <Rating value={rating} readOnly />
              <Text>{description}</Text>
            </Stack>
            <Stack gap={0}>
              <Title order={3}>{title}</Title>
              <Text>{subTitle}</Text>
            </Stack>
          </Flex>
        </Grid.Col>
      </Grid>
    </Box>
  );
};
