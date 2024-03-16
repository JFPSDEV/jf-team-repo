import React from 'react';

import Image from 'next/image';

import classes from './TestimonialCard.module.css';

import { Grid, Box, Stack, Text, Title, Rating, Flex, Spoiler } from '@jfteam/material';
import { ELocale, ESpoiler, ITestimonialRow, spoiler } from '@/utils';
import { useResponsive } from '@jfteam/hooks';
import { ETrigger, FadeTrigger } from '@jfteam/animated';
import { useLocale } from '@/hooks';

interface TestimonialCardProps {
  row: ITestimonialRow;
}

export const TestimonialCard = ({ row }: TestimonialCardProps) => {
  const { locale: linkLocale } = useLocale();
  const locale: ELocale = linkLocale || ELocale.FR;

  const { isMobile } = useResponsive();

  const reade = spoiler[locale];

  return (
    <Box p="md" className={classes.container}>
      <Grid gutter="md">
        <Grid.Col span={{ base: 12, sm: 4 }}>
          <Box h={isMobile ? 210 : 270} className={classes.pictureContainer}>
            <Image
              src={row.picture}
              alt={row.title}
              fill
              style={{ objectFit: 'cover' }}
              className={classes.testimonialPicture}
            />
          </Box>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 8 }}>
          <Flex justify="center" direction="column" gap="xl" h="100%">
            <Stack align={isMobile ? 'center' : undefined}>
              <FadeTrigger trigger={ETrigger.ScrollTrigger} direction="left">
                <Rating value={row.rating} readOnly />
              </FadeTrigger>

              <FadeTrigger trigger={ETrigger.ScrollTrigger} direction="left">
                <Spoiler
                  ta={isMobile ? 'center' : undefined}
                  maxHeight={100}
                  showLabel={reade.more}
                  hideLabel={reade.less}
                >
                  {row.description}
                </Spoiler>
              </FadeTrigger>
            </Stack>
            <FadeTrigger trigger={ETrigger.ScrollTrigger} direction="left">
              <Stack gap={0} align={isMobile ? 'center' : undefined}>
                <Title order={3}>{row.title}</Title>
                <Text ta={isMobile ? 'center' : undefined}>{row.subTitle}</Text>
              </Stack>
            </FadeTrigger>
          </Flex>
        </Grid.Col>
      </Grid>
    </Box>
  );
};
