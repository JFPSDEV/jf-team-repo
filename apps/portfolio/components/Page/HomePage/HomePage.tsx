import React from 'react';

import { useResponsive } from '@jfteam/hooks';

import { EPageId, IHomePage } from '@/utils';
import { Hero } from '@/components/Section';
import {
  DynamicContact,
  DynamicFooter,
  DynamicPreface,
  DynamicProject,
  DynamicTechno,
  DynamicTestimonial,
} from './dynamic';

interface HomePageProps {
  page: IHomePage;
}

export const HomePage = ({ page }: HomePageProps) => {
  const { ...props } = useResponsive();

  if (!page) return null;

  const { preface, project, testimonial, contact } = page;

  return (
    <>
      <Hero {...props} mode={EPageId.HOME} />
      <DynamicPreface row={preface} {...props} />
      <DynamicTechno {...props} />
      <DynamicProject row={project} {...props} />
      <DynamicTestimonial row={testimonial} {...props} />
      <DynamicContact row={contact} {...props} />
      <DynamicFooter {...props} />
    </>
  );
};

export default HomePage;
