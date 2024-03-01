import React from 'react';

import { useResponsive } from '@jfteam/hooks';

import { IHomePage } from '@/utils';
import { Contact, Footer, Hero, Preface, Project, Techno, Testimonial } from '@/components/Section';
import { ETrigger, FadeTrigger } from '@jfteam/animated';

interface HomePageProps {
  page: IHomePage;
}

export const HomePage = ({ page }: HomePageProps) => {
  const { ...props } = useResponsive();

  if (!page) return null;

  const { preface, project, testimonial, contact } = page;

  return (
    <>
      <Hero {...props} />
      <Preface row={preface} {...props} />

      <Techno />
      <Project row={project} {...props} />
      <Testimonial row={testimonial} {...props} />
      <Contact row={contact} {...props} />
      {/* <Footer {...props} /> */}
    </>
  );
};
