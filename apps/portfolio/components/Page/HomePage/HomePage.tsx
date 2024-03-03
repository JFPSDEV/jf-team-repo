import React from 'react';

import { useLoading, useResponsive } from '@jfteam/hooks';

import { EPageId, IHomePage } from '@/utils';
import { Contact, Footer, Hero, Preface, Project, Techno, Testimonial } from '@/components/Section';

interface HomePageProps {
  page: IHomePage;
}

export const HomePage = ({ page }: HomePageProps) => {
  const { ...props } = useResponsive();

  const loading = useLoading();

  if (!page) return null;

  const { preface, project, testimonial, contact } = page;

  return (
    <>
      <Hero {...props} mode={EPageId.HOME} />
      <Preface row={preface} {...props} />
      <Techno {...props} />
      <Project row={project} {...props} />
      <Testimonial row={testimonial} {...props} />
      <Contact row={contact} {...props} />
      <Footer {...props} />
    </>
  );
};
