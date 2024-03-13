import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { IconBuilding } from '@jfteam/icons';
import { Box, Grid, Stack, Text, Title } from '@jfteam/material';

import { Section } from '../Section';
import classes from './Experience.module.css';
import { IExperience, type TSectionProps } from '@/utils';
import { CVTimeline, Title as MultiLineTitle } from '@/components';
import { ETrigger, FadeTrigger } from '@jfteam/animated';

interface ExperienceProps extends TSectionProps {
  row: IExperience;
}

const Experience = ({ row, isDesktop }: ExperienceProps) => {
  return (
    <Section>
      <FadeTrigger trigger={ETrigger.ScrollTrigger}>
        <MultiLineTitle order={2} ta="center" pb={50} rows={row.title} />
      </FadeTrigger>

      <CVTimeline active={row.rows.length} align="right">
        {row?.rows.map(({ id, title: studyTitle, description, duration, link, img }) => (
          <CVTimeline.Item bullet={<IconBuilding size={CVTimeline.iconSize} />} key={id}>
            <FadeTrigger trigger={ETrigger.ScrollTrigger} direction="right" duration={1}>
              <CVTimeline.Card p={0} direction="Left">
                <Grid>
                  <Grid.Col span={{ base: 12, md: 6 }} h={!isDesktop ? 150 : undefined}>
                    <Link href={link} target="_blank">
                      <Box
                        h="100%"
                        style={{
                          position: 'relative',
                          clipPath: !isDesktop
                            ? undefined
                            : 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)',
                        }}
                        className={classes.ImageContainer}
                      >
                        <Image
                          src={img}
                          alt="JF Picture"
                          fill
                          className={classes.zoomedImage}
                          style={{ objectFit: 'cover' }}
                        />
                      </Box>
                    </Link>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Stack gap="sm" p="md">
                      <Link href={link} target="_blank" style={{ textDecoration: 'none' }}>
                        <Title order={3}>{studyTitle}</Title>
                      </Link>
                      <Text c="dimmed" size="sm">
                        {description}
                      </Text>
                      <Text size="xs">
                        <b>{duration}</b>
                      </Text>
                    </Stack>
                  </Grid.Col>
                </Grid>
              </CVTimeline.Card>
            </FadeTrigger>
          </CVTimeline.Item>
        ))}
      </CVTimeline>
    </Section>
  );
};

export default Experience;
