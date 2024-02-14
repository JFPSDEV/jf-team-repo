import React from 'react';

import { Section } from '../Section';
import {
  ActionIcon,
  Box,
  Flex,
  Group,
  Stack,
  Text,
  Timeline,
  Title,
  Tooltip,
} from '@jfteam/material';
import {
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

const list = [
  {
    id: generateUUID(),
    date: '10/2023',
    title: 'Master Expert Développement Web',
    description: 'Titre RNCP d’Expert Informatique et Systèmes d’Information de niveau 7',
    link: '/docs/MASTER-WEB-Jean-Francois-Picherit-Steinbrucker.pdf',
  },
  {
    id: generateUUID(),
    date: '08/2021',
    title: 'LP (DAWIN) Développement en applications web et innovation numérique',
    description: 'Titre RNCP de Spécialiste Informatique et Systèmes d’Information de niveau 6',
    link: '/docs/LP-DAWIN-Jean-Francois-Picherit-Steinbrucker.pdf',
  },
  {
    id: generateUUID(),
    date: '06/2020',
    title:
      'BTS (SIO) Service Informatiques aux Organisations option Solution Application Logiciel et Métier',
    description:
      'Titre RNCP de Maîtrise des Solutions Informatique et Systèmes d’Information de niveau 5',
    link: '/docs/BTS-SIO-Jean-Francois-Picherit-Steinbrucker.pdf',
  },
  {
    id: generateUUID(),
    date: '07/2018',
    title: 'Baccalauréat ES option Maths mention « assez bien »',
    description: 'Titre RNCP de niveau 4',
    link: '/docs/BAC-ES-Jean-Francois-Picherit-Steinbrucker.pdf',
  },
];

const title = 'Formation';

interface StudyProps {}

export const Study = (props: StudyProps) => {
  const { isMobile } = useResponsive();

  return (
    <Section isDashed={false} py={80} bg="#f0f0ff">
      <Title order={2} ta="center" pb={50}>
        {title.toUpperCase()}
      </Title>
      <CVTimeline active={list.length}>
        {list.map(({ id, title: studyTitle, description, date, link }) => (
          <CVTimeline.Item bullet={<IconSchool size={CVTimeline.iconSize} />} key={id}>
            <CVTimeline.Card direction="Right">
              <Flex align={isMobile ? 'end' : 'center'}>
                <Stack gap="sm" style={{ flex: 1 }}>
                  <Title order={3}>{studyTitle}</Title>
                  <Text c="dimmed" size="sm">
                    {description}
                  </Text>
                  <Text size="xs">
                    <b>{date}</b>
                  </Text>
                </Stack>
                <Tooltip label="Baccalauréat">
                  <ActionIcon
                    w={50}
                    h={50}
                    variant="outline"
                    component="a"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconPdf size={CVTimeline.iconSize} />
                  </ActionIcon>
                </Tooltip>
              </Flex>
            </CVTimeline.Card>
          </CVTimeline.Item>
        ))}
      </CVTimeline>
    </Section>
  );
};
