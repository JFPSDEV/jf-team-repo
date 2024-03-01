import React from 'react';

import Image from 'next/image';

import { IconStyle } from '@jfteam/icons';
import { Box, HTimeline, Text, Title, Stack, List, ThemeIcon } from '@jfteam/material';

import { Section } from '../Section';
import classes from './Presentation.module.css';
import { IPresentation, type TSectionProps } from '@/utils';
import { CVTimeline } from '@/components';
import { Title as MultiLineTitle } from '@/components/Title/Title';
import { FadeTrigger, RotationTrigger } from '@jfteam/animated';

const lineWidth = '25%';
const baseWidth = 270;

interface PresentationProps extends TSectionProps {
  row: IPresentation;
}

export const Presentation = ({ row, isMobile }: PresentationProps) => {
  const image = (
    <Image
      src={row.picture}
      alt={row.title.join()}
      layout="fill"
      objectFit="cover"
      className={classes.mainPicture}
    />
  );

  const title = (
    <FadeTrigger
      className={classes.titleContainer}
      direction="up"
      duration={1.5}
      startPosition={50}
    >
      <MultiLineTitle order={1} rows={row.title} w="100%" ta="center" />
    </FadeTrigger>
  );

  return (
    <>
      {!isMobile && row?.title && title}
      <Section px="xl" pb={80} pt={{ xs: 0, md: 60 }}>
        {isMobile && title}
        {!isMobile && (
          <FadeTrigger
            style={{ position: 'relative', height: 440 }}
            direction="right"
            duration={1.5}
          >
            <HTimeline>
              <HTimeline.Item
                bulletSize={265}
                lineHeight={5}
                lineWidth={lineWidth}
                color="#D18852"
              />

              {row?.rows.map(({ id, value, icon }, index) => (
                <HTimeline.Item
                  key={id}
                  bulletSize={CVTimeline.bulletSize}
                  lineHeight={5}
                  lineWidth={index + 1 < row.rows?.length ? lineWidth : 0}
                  color="#D18852"
                  icon={<IconStyle value={icon} />}
                >
                  <Title order={3} className={classes.hTimelineTitle}>
                    {value}
                  </Title>
                </HTimeline.Item>
              ))}

              <CVTimeline
                active={1}
                align="left"
                pl={baseWidth / 2}
                style={{ position: 'absolute', bottom: 90 }}
                pr="xl"
                h={150}
              >
                <CVTimeline.Item>
                  <Box h={100} />
                </CVTimeline.Item>

                <CVTimeline.Item bullet={<IconStyle value="ti ti-mood-smile-beam" />}>
                  <FadeTrigger direction="up" duration={1.5}>
                    {row?.description && (
                      <Text
                        style={{ transformOrigin: 'center', transform: 'translateY(-30%)' }}
                        dangerouslySetInnerHTML={{ __html: row.description }}
                      />
                    )}
                  </FadeTrigger>
                </CVTimeline.Item>
              </CVTimeline>
              <Box style={{ position: 'absolute', top: 0, bottom: 0 }}>
                <RotationTrigger
                  style={{ width: baseWidth, height: baseWidth, position: 'relative', zIndex: 2 }}
                >
                  {image}
                </RotationTrigger>
              </Box>
            </HTimeline>
          </FadeTrigger>
        )}
        {isMobile && (
          <Stack align="center" gap="xl">
            <Box h={baseWidth} w={baseWidth} style={{ position: 'relative' }}>
              {image}
            </Box>

            <Text ta="center" dangerouslySetInnerHTML={{ __html: row.description }} />

            <List spacing="xl" size="sm" center>
              {row.rows.map(({ id, value, icon }, index) => (
                <List.Item
                  key={id}
                  icon={
                    <ThemeIcon color="#D18852" size={32} radius="xl">
                      <IconStyle value={icon} size={20} />
                    </ThemeIcon>
                  }
                >
                  <Text>{value}</Text>
                </List.Item>
              ))}
            </List>
          </Stack>
        )}
      </Section>
    </>
  );
};
