import React, { useState } from 'react';

import { useResponsive } from '@jfteam/hooks';
import { ETrigger, FadeTrigger, ScrollTrigger } from '@jfteam/animated';
import { Grid, Stack, type Embla, Box } from '@jfteam/material';

import { useLocale } from '@/hooks';
import { Section } from '../Section';
import { Title } from '@/components/Title/Title';
import ProjectCardList from './ProjectCardList/ProjectCardList';
import { ProjectCarousel } from './ProjectCarousel/ProjectCarousel';
import { ENavlink, IProject, type TSectionProps, headerLink } from '@/utils';

interface ProjectProps extends TSectionProps {
  row: IProject;
}

const Project = ({ row, isMobile }: ProjectProps) => {
  const { locale } = useLocale();
  const { isDesktop } = useResponsive();

  const [embla, setEmbla] = useState<Embla | null>(null);
  const [index, setIndex] = useState<number>(0);

  const anchor = headerLink.navlink[ENavlink.PROJECT][locale].anchor;

  return (
    <Section id={anchor}>
      <FadeTrigger trigger={ETrigger.ScrollTrigger}>
        {row?.title && <Title order={2} ta="center" mb={30} rows={row.title} />}

        <Box h={isMobile ? undefined : 440}>
          <Grid>
            <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 7 }}>
              <FadeTrigger
                trigger={ETrigger.ScrollTrigger}
                direction="down"
                style={{ height: '100%' }}
              >
                <ProjectCarousel list={row.rows} getEmblaApi={setEmbla} onIndexChange={setIndex} />
              </FadeTrigger>
            </Grid.Col>
            {isDesktop && (
              <Grid.Col span={5}>
                <FadeTrigger trigger={ETrigger.ScrollTrigger} direction="right">
                  <ProjectCardList
                    list={row.rows}
                    webSiteLabel={row.webSiteLabel}
                    index={index}
                    onClick={(_idx: number) => embla?.scrollTo(_idx)}
                  />
                </FadeTrigger>
              </Grid.Col>
            )}
          </Grid>
        </Box>
      </FadeTrigger>
    </Section>
  );
};

export default Project;
