import React, { useState } from 'react';

import { ENavlink, IProject, headerLink } from '@/utils';
import { Section } from '../Section';
import { useResponsive } from '@jfteam/hooks';
import { Title } from '@/components/Title/Title';
import { Grid, Stack, type Embla } from '@jfteam/material';
import ProjectCardList from './ProjectCardList/ProjectCardList';
import { ProjectCarousel } from './ProjectCarousel/ProjectCarousel';
import { useLocale } from '@/hooks';

interface ProjectProps {
  row: IProject;
}

export const Project = ({ row }: ProjectProps) => {
  const locale = useLocale();
  const { isDesktop } = useResponsive();

  const [embla, setEmbla] = useState<Embla | null>(null);
  const [index, setIndex] = useState<number>(0);

  const anchor = headerLink.navlink[ENavlink.PROJECT][locale].anchor;

  return (
    <Section py={80} px="md" id={anchor}>
      {row?.title && <Title order={2} ta="center" mb={30} rows={row.title} />}

      <Stack h={!isDesktop ? undefined : 515} gap={30} justify="center">
        <Grid h="100%">
          <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 7 }}>
            <ProjectCarousel list={row.rows} getEmblaApi={setEmbla} onIndexChange={setIndex} />
          </Grid.Col>
          {isDesktop && (
            <Grid.Col span={5}>
              <ProjectCardList
                list={row.rows}
                index={index}
                onClick={(_idx: number) => embla?.scrollTo(_idx)}
              />
            </Grid.Col>
          )}
        </Grid>
      </Stack>
    </Section>
  );
};
