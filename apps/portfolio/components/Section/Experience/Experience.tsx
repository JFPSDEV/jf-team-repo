import React from 'react';

import { Section } from '../Section';
import {
  ActionIcon,
  Box,
  Flex,
  Grid,
  Group,
  Stack,
  Text,
  Timeline,
  Title,
  Tooltip,
} from '@jfteam/material';
import {
  IconBuilding,
  IconDownload,
  IconFileTypePdf,
  IconGitBranch,
  IconGitCommit,
  IconGitPullRequest,
  IconMessageDots,
  IconPdf,
  IconSchool,
  NewTabIcon,
} from '@jfteam/icons';
import { generateUUID } from '@jfteam/utils';
import { CVTimeline } from '@/components/CVTimeline/CVTimeline';

import { useResponsive } from '@jfteam/hooks';
import Image from 'next/image';

import classes from './Experience.module.css';
import Link from 'next/link';

const list = [
  {
    id: generateUUID(),
    date: '2 ans',
    title: 'Alternance à “DOTS”, situé à Bordeaux. ',
    description:
      'Gestion de la données, conception et maintenances de solution applicatives en typescript. Des projets réalisées principalement avec NextJs, Turborepo, Graphql et Nhost',
    link: 'https://www.pepiniere-chartrons.fr/entreprises/dots',
    img: '/images/dots-descktop.jpg',
  },
  {
    id: generateUUID(),
    date: '1 an',
    title: `Alternance à “Planning Médical”, située à Saint-Jean-d’ilIac.
`,
    description: `Maintenance, évolution et test d’un projet en php,
gérant et générant des planning pour le milieu médical.`,
    link: 'https://www.planning-medical.com/temoignages.php',
    img: '/images/PMC-descktop.JPG',
  },
  {
    id: generateUUID(),
    date: '7 semaine',
    title: `Stage à “Business Web Agence”, à Dijon`,
    description:
      'Gestion de projet, conception et refonte de solutions applicatives avec le Framework Laravel',
    link: 'https://www.business-web-agence.com',
    img: '/images/BWA-descktop.jpg',
  },
];

const title = 'Expérience professionnelle';

interface ExperienceProps {}

export const Experience = (props: ExperienceProps) => {
  const { isDesktop } = useResponsive();

  return (
    <Section isDashed={false} py={80}>
      <Title order={2} ta="center" pb={50}>
        {title.toUpperCase()}
      </Title>
      <CVTimeline active={list.length} align="right">
        {list.map(({ id, title: studyTitle, description, date, link, img }) => (
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
                    <Title order={3}>{studyTitle}</Title>
                    <Text c="dimmed" size="sm">
                      {description}
                    </Text>
                    <Text size="xs">
                      <b>{date}</b>
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
