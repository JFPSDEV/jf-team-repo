import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { IconBuilding } from '@jfteam/icons';
import { useResponsive } from '@jfteam/hooks';
import { Box, Grid, Stack, Text, Title } from '@jfteam/material';

import { Section } from '../Section';
import { IExperience } from '@/utils';
import classes from './Experience.module.css';
import { CVTimeline } from '@/components/CVTimeline/CVTimeline';
import { Title as MultiLineTitle } from '@/components/Title/Title';

interface ExperienceProps {
  row: IExperience;
}

export const Experience = ({ row }: ExperienceProps) => {
  const { isDesktop } = useResponsive();

  return (
    <Section py={80}>
      <MultiLineTitle order={2} ta="center" pb={50} rows={row.title} />

      <CVTimeline active={row.rows.length} align="right">
        {row?.rows.map(({ id, title: studyTitle, description, duration, link, img }) => (
          <CVTimeline.Item bullet={<IconBuilding size={CVTimeline.iconSize} />} key={id}>
            <CVTimeline.Card
              p={0}
              borderWidth={1}
              borderColor="var(--mantine-color-gray-3)"
              direction="Left"
            >
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
                        layout="fill"
                        objectFit="cover"
                        className={classes.zoomedImage}
                        style={{}}
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
          </CVTimeline.Item>
        ))}
      </CVTimeline>
    </Section>
  );
};
