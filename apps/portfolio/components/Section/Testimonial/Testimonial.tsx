import React, { useEffect, useRef, useState } from 'react';

import { Carousel } from '@jfteam/carousel';
import {
  Box,
  type Embla,
  cx,
  Flex,
  Group,
  Button,
  ActionIcon,
  Stack,
  Title,
} from '@jfteam/material';
import { Section } from '../Section';
import { TestimonialCard } from './TestimonialCard/TestimonialCard';

import { type StaticImageData } from 'next/image';

import alexisPicture from '../../../public/images/alexis-filia.jpeg';
import tonyPicture from '../../../public/images/tony-maublanc.jpeg';
import fabricePicture from '../../../public/images/fabrice-deydier.jpeg';

import { IconChevronLeft, IconChevronRight } from '@jfteam/icons';

import classes from './Testimonial.module.css';
import { ESpoiler } from '@/utils';
import { useResponsive } from '@jfteam/hooks';

export interface TTestimonial {
  id: string;
  title: string;
  subTitle: string;
  link: string;
  description: string;
  picture: StaticImageData;
  rating: number;
}

const list: TTestimonial[] = [
  {
    id: '1',
    title: 'Alexis Filia',
    subTitle: 'Co fondateur de dots',
    link: 'https://www.linkedin.com/in/alexis-filia/?originalSubdomain=fr',
    description: `Je recommande notre cher Jeff avec qui j'ai eu le plaisir de bosser pendant deux ans dans mon entreprise, dots, alors qu'il était en alternance en tant que Dev fullstack. Toujours motivé, de bonne humeur, curieux et vraiment impliqué, on a apprécié son travail et aussi le fait qu'au besoin, on savait qu'on pouvait compter sur lui. Il a énormément évolué pendant ces deux années, et il va encore progresser. On lui souhaite plein de succès avec ses prochaines structures d'accueil et de manière générale dans sa carrière !`,
    picture: alexisPicture,
    rating: 5,
  },
  {
    id: '2',
    title: 'Tony Maublanc',
    subTitle: 'Responsable de projet de PMC',
    link: 'https://www.linkedin.com/in/tony-maublanc-45b383105/?originalSubdomain=fr',
    description:
      'Jean-François a été super durant son alternance chez nous ! Motivé, persévérant, son travail est toujours en fonctionnement aujourd’hui. Bref, je recommande vivement ☺️',
    picture: tonyPicture,
    rating: 5,
  },
  {
    id: '3',
    title: 'Fabrice Deydier',
    subTitle: 'Co-fondateur et gérant de PMC',
    link: 'https://www.linkedin.com/in/fabrice-deydier-1532022b/',
    description: `Je recommande vivement Jean-François dans le domaine du développement informatique. Pendant son alternance chez Planning-Services.fr, il a brillamment démontré ses compétences en PHP, HTML, CSS, et JavaScript. 
Ce qui distingue Jean-François, c'est sa capacité à prendre des initiatives et à apporter des solutions innovantes aux problèmes. Il a non seulement amélioré nos processus, mais a aussi positivement impacté l'ambiance de notre équipe. Sa passion pour l'apprentissage et son engagement pour la qualité du travail en font un collaborateur extrêmement précieux. Jean-François est sans aucun doute un atout pour toute équipe.`,
    picture: fabricePicture,
    rating: 5,
  },
];

interface TestimonialProps {}

const title = {
  line1: 'Quelque retour sur',
  line2: 'mes projets',
};

export const Testimonial = (props: TestimonialProps) => {
  const {} = props;

  const { isDesktop } = useResponsive();

  const [embla, setEmbla] = useState<Embla | null>(null);

  return (
    <Section isDashed={false} py={80} px="md" bg="#f0f0ff">
      <Stack gap={30} px="md">
        <Title order={2} ta="center">
          {title.line1.toUpperCase()}
          <br /> {title.line2.toUpperCase()}
        </Title>

        <Group justify="space-between">
          {isDesktop && (
            <ActionIcon
              className={classes.carouselButton}
              variant="outline"
              onClick={() => embla?.scrollPrev()}
            >
              <IconChevronLeft className={cx(classes.icons, classes.iconLeft)} />
            </ActionIcon>
          )}
          <Carousel
            loop
            w={!isDesktop ? '100%' : '80%'}
            rows={list}
            delay={8000}
            getEmblaApi={setEmbla}
            className={classes.carousel}
            withControls={!isDesktop}
            withIndicators
          >
            {(row) => <TestimonialCard row={row} />}
          </Carousel>
          {isDesktop && (
            <ActionIcon
              className={classes.carouselButton}
              variant="outline"
              onClick={() => embla?.scrollNext()}
            >
              <IconChevronRight className={cx(classes.icons, classes.iconRight)} />
            </ActionIcon>
          )}
        </Group>
      </Stack>
    </Section>
  );
};
