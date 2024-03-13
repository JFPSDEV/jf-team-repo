import React from 'react';
import dynamic from 'next/dynamic';

import { useResponsive } from '@jfteam/hooks';

import { EPageId, IHomePage } from '@/utils';
import { Hero } from '@/components/Section';
import { Skeleton } from '@jfteam/material';

const DynamicPreface = dynamic(() => import('../../Section/Preface/Preface'), {
  loading: () => <Skeleton visible={true} />,
});

const DynamicTechno = dynamic(() => import('../../Section/Techno/Techno'));

const DynamicProject = dynamic(() => import('../../Section/Project/Project'));

const DynamicTestimonial = dynamic(() => import('../../Section/Testimonial/Testimonial'));

const DynamicContact = dynamic(() => import('../../Section/Contact/Contact'));

const DynamicFooter = dynamic(() => import('../../Section/Footer/Footer'));

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
