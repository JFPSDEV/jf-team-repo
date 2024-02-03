import React, { useEffect, useState } from 'react';
import { Section } from '../Section';
import { Grid, Stack, Title, type Embla } from '@jfteam/material';

import ProjectCardList from './ProjectCardList/ProjectCardList';

import chateauRouillac from '../../../public/images/chateau-rouillac.png';
import dots from '../../../public/images/dots.png';
import tentationsAustrales from '../../../public/images/tentations-australes.png';
import planningMedical from '../../../public/images/planning-medical.png';
import { StaticImageData } from 'next/image';
import { ProjectCarousel } from './ProjectCarousel/ProjectCarousel';
//: StaticImageData

export interface TProject {
  id: string;
  title: string;
  link: string;
  description: string;
  picture: StaticImageData;
}

const list: TProject[] = [
  {
    id: '0',
    title: 'Chateau Rouillac',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    picture: chateauRouillac,
    link: 'https://www.chateauderouillac.com/',
  },
  {
    id: '1',
    title: 'Dots',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    picture: dots,
    link: 'https://www.dots.cool/',
  },
  {
    id: '2',
    title: 'Planning Médicale',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    picture: planningMedical,
    link: 'https://www.planning-medical.com/',
  },
  {
    id: '3',
    title: 'Tentations Australes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    picture: tentationsAustrales,
    link: 'https://tentationsaustrales.com/',
  },
];

interface ProjectProps {}

export const Project = (props: ProjectProps) => {
  const {} = props;

  const [embla, setEmbla] = useState<Embla | null>(null);
  const [index, setIndex] = useState<number>(0);

  return (
    <Section isDashed={false} py={125} px="md">
      <Stack px="md" h={515} gap={30}>
        <Title order={2}>Projet professionnels</Title>
        <Grid>
          <Grid.Col span={7}>
            <ProjectCarousel list={list} getEmblaApi={setEmbla} onIndexChange={setIndex} />
          </Grid.Col>
          <Grid.Col span={5}>
            <ProjectCardList
              list={list}
              index={index}
              onClick={(_idx: number) => embla?.scrollTo(_idx)}
            />
          </Grid.Col>
        </Grid>
      </Stack>
    </Section>
  );
};
