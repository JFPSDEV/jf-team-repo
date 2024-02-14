import React from 'react';

import Image from 'next/image';

import { generateUUID } from '@jfteam/utils';
import { IconMail, IconMoodSmileBeam, IconPhone } from '@jfteam/icons';
import { Box, Timeline, Title, HTimeline, Text } from '@jfteam/material';

import { Section } from '../Section';
import classes from './Presentation.module.css';
import { CVTimeline } from '@/components/CVTimeline/CVTimeline';

const list = [
  {
    id: generateUUID(),
    value: 'jfps.dev@gmail.com',
    icon: <IconMail />,
  },
  {
    id: generateUUID(),
    value: '07 69 13 94 76',
    icon: <IconPhone />,
  },
];

const lineWidth = '25%';
const baseWidth = 270;

const title = { line1: 'Full Stack', line2: 'Developper' };

export const Presentation = () => {
  return (
    <>
      <Title order={1} className={classes.title} w="100%" ta="center">
        {title.line1.toUpperCase()}
        <br />
        {title.line2.toUpperCase()}
      </Title>
      <Section isDashed={false} px="xl" pb={80} pt={60}>
        <Box h={440} style={{ position: 'relative' }}>
          <HTimeline>
            <HTimeline.Item bulletSize={265} lineHeight={5} lineWidth={lineWidth} color="#D18852" />

            {list.map(({ id, value, icon }, index) => (
              <HTimeline.Item
                key={id}
                bulletSize={CVTimeline.bulletSize}
                lineHeight={5}
                lineWidth={index + 1 < list?.length ? lineWidth : 0}
                color="#D18852"
                icon={icon}
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

              <CVTimeline.Item bullet={<IconMoodSmileBeam size={25} />}>
                <Box>
                  <Text style={{ transformOrigin: 'center', transform: 'translateY(-30%)' }}>
                    Bonjour, je m'apelle <b>Jean-François Picherit-Steinbrucker</b>. Avec cinq
                    années d'études spécialisées dans le développement web et trois années
                    d'expérience en alternance, je suis un développeur full stack passionné par
                    l'innovation et la création. Mon parcours m'a permis d'acquérir une solide
                    expertise technique ainsi qu'une approche pragmatique dans la résolution de
                    problèmes. Toujours avide de nouvelles connaissances et d'opportunités pour me
                    surpasser, je suis convaincu que mon enthousiasme et mon dévouement sont des
                    atouts précieux pour tout projet ambitieux.
                  </Text>
                </Box>
              </CVTimeline.Item>
            </CVTimeline>
            <Box style={{ position: 'absolute', top: 0, bottom: 0 }}>
              <Box h={baseWidth} w={baseWidth} style={{ position: 'relative' }}>
                <Image
                  src="/jf_preface_2.png"
                  alt="JF Picture"
                  layout="fill"
                  objectFit="cover"
                  className={classes.mainPicture}
                />
              </Box>
            </Box>
          </HTimeline>
        </Box>
      </Section>
    </>
  );
};
