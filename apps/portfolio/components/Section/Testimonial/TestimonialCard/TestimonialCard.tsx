import React from 'react';

import Image from 'next/image';

import classes from './TestimonialCard.module.css';

import { Grid, Box, Stack, Text, Title, Rating, Flex, Spoiler } from '@jfteam/material';
import { ESpoiler, ITestimonialRow } from '@/utils';
import { useResponsive } from '@jfteam/hooks';

interface TestimonialCardProps {
  row: ITestimonialRow;
}

export const TestimonialCard = ({ row }: TestimonialCardProps) => {
  const { isMobile } = useResponsive();

  return (
    <Box p="md" className={classes.container}>
      <Grid gutter="md">
        <Grid.Col span={{ base: 12, sm: 4 }}>
          <Box h={isMobile ? 210 : 270} className={classes.pictureContainer}>
            <Image
              src={row.picture}
              alt={row.title}
              layout="fill"
              objectFit="cover"
              className={classes.testimonialPicture}
            />
          </Box>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 8 }}>
          <Flex justify="center" direction="column" gap="xl" h="100%">
            <Stack align={isMobile ? 'center' : undefined}>
              <Rating value={row.rating} readOnly />
              <Spoiler
                ta={isMobile ? 'center' : undefined}
                maxHeight={100}
                showLabel={ESpoiler.READ_MORE}
                hideLabel={ESpoiler.READ_LESS}
              >
                {row.description}
              </Spoiler>
            </Stack>
            <Stack gap={0} align={isMobile ? 'center' : undefined}>
              <Title order={3}>{row.title}</Title>
              <Text ta={isMobile ? 'center' : undefined}>{row.subTitle}</Text>
            </Stack>
          </Flex>
        </Grid.Col>
      </Grid>
    </Box>
  );
};
