import React from 'react';

import Image from 'next/image';

import { IconStyle } from '@jfteam/icons';
import { Box, HTimeline, Text, Title, Stack, List, ThemeIcon } from '@jfteam/material';

import { Section } from '../Section';
import classes from './Presentation.module.css';
import { CVTimeline } from '@/components/CVTimeline/CVTimeline';
import { useResponsive } from '@jfteam/hooks';
import { IPresentation } from '@/utils';
import { Title as MultiLineTitle } from '@/components/Title/Title';

const lineWidth = '25%';
const baseWidth = 270;

interface PresentationProps {
  row: IPresentation;
}

export const Presentation = ({ row }: PresentationProps) => {
  const { isMobile } = useResponsive();

  const image = (
    <Image
      src={row.picture}
      alt={row.title.join()}
      layout="fill"
      objectFit="cover"
      className={classes.mainPicture}
    />
  );

  return (
    <>
      {row?.title && (
        <MultiLineTitle order={1} rows={row.title} className={classes.title} w="100%" ta="center" />
      )}
      <Section px="xl" pb={80} pt={{ xs: 0, md: 60 }}>
        {!isMobile && (
          <Box h={440} style={{ position: 'relative' }}>
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
                  <Box>
                    {row?.description && (
                      <Text
                        style={{ transformOrigin: 'center', transform: 'translateY(-30%)' }}
                        dangerouslySetInnerHTML={{ __html: row.description }}
                      />
                    )}
                  </Box>
                </CVTimeline.Item>
              </CVTimeline>
              <Box style={{ position: 'absolute', top: 0, bottom: 0 }}>
                <Box h={baseWidth} w={baseWidth} style={{ position: 'relative' }}>
                  {image}
                </Box>
              </Box>
            </HTimeline>
          </Box>
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
