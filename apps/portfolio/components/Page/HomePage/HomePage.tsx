import React, { useState } from 'react';
import dynamic from 'next/dynamic';

import { useResponsive } from '@jfteam/hooks';

import { ELocale, EPageId, IHomePage } from '@/utils';
import { Hero } from '@/components/Section';
import { Box, Skeleton, TextInput } from '@jfteam/material';
import classes from './HomePage.module.css';

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
  locale: ELocale;
}

export const HomePage = ({ page, locale }: HomePageProps) => {
  const { ...props } = useResponsive();

  if (!page) return null;

  const { preface, project, testimonial, contact } = page;

  return (
    <Box className={classes.page}>
      <Hero {...props} locale={locale} mode={EPageId.HOME} />
      <DynamicPreface row={preface} {...props} />
      <DynamicTechno {...props} />
      <DynamicProject row={project} {...props} />
      <DynamicTestimonial row={testimonial} {...props} />
      <DynamicContact row={contact} {...props} />
      <DynamicFooter {...props} locale={locale} />
    </Box>
  );
};

export default HomePage;
