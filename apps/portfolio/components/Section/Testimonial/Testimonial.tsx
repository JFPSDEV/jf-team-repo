import React, { useState } from 'react';

import { Carousel } from '@jfteam/carousel';
import { IconChevronLeft, IconChevronRight } from '@jfteam/icons';
import { type Embla, cx, Group, ActionIcon, Stack } from '@jfteam/material';

import { Section } from '../Section';
import classes from './Testimonial.module.css';
import { Title } from '@/components/Title/Title';
import { ENavlink, EVartiant, ITestimonial, TSectionProps, headerLink } from '@/utils';
import { TestimonialCard } from './TestimonialCard/TestimonialCard';
import { ETrigger, FadeTrigger } from '@jfteam/animated';
import { useLocale } from '@/hooks';

interface TestimonialProps extends TSectionProps {
  row: ITestimonial;
}

const Testimonial = ({ row, isDesktop }: TestimonialProps) => {
  const [embla, setEmbla] = useState<Embla | null>(null);

  const { locale } = useLocale();

  const anchor = headerLink.navlink[ENavlink.FEEDBACK][locale].anchor;

  return (
    <Section variant={EVartiant.SECONDARY} id={anchor} className={classes.section}>
      <FadeTrigger trigger={ETrigger.ScrollTrigger}>
        <Stack gap={30}>
          <Title order={2} ta="center" rows={row.title} />

          <Group justify="space-between">
            {isDesktop && (
              <FadeTrigger trigger={ETrigger.ScrollTrigger} direction="right" duration={1.5}>
                <ActionIcon
                  className={classes.carouselButton}
                  variant="outline"
                  onClick={() => embla?.scrollPrev()}
                >
                  <IconChevronLeft className={cx(classes.icons, classes.iconLeft)} />
                </ActionIcon>
              </FadeTrigger>
            )}
            <Carousel
              loop
              w={!isDesktop ? '100%' : '80%'}
              rows={row.rows}
              delay={8000}
              getEmblaApi={setEmbla}
              className={classes.carousel}
              withControls={!isDesktop}
            >
              {(row) => <TestimonialCard row={row} />}
            </Carousel>
            {isDesktop && (
              <FadeTrigger trigger={ETrigger.ScrollTrigger} direction="left" duration={1.5}>
                <ActionIcon
                  className={classes.carouselButton}
                  variant="outline"
                  onClick={() => embla?.scrollNext()}
                >
                  <IconChevronRight className={cx(classes.icons, classes.iconRight)} />
                </ActionIcon>
              </FadeTrigger>
            )}
          </Group>
        </Stack>
      </FadeTrigger>
    </Section>
  );
};

export default Testimonial;
