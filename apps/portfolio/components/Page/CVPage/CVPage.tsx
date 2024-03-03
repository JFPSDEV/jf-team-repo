import React from 'react';

import { useResponsive } from '@jfteam/hooks';

import { ELocale, EPageId, ICVPage } from '@/utils';
import { Experience, Footer, Hero, Hobby, Presentation, Skill, Study } from '@/components/Section';

interface CVPageProps {
  page: ICVPage;
}

export const CVPage = ({ page }: CVPageProps) => {
  const { ...props } = useResponsive();

  if (!page) return null;

  const { presentation, study, experience, skill, hobby } = page;

  return (
    <>
      <Hero {...props} mode={EPageId.CV} />
      <Presentation row={presentation} {...props} />
      <Study row={study} {...props} />
      <Experience row={experience} {...props} />
      <Skill row={skill} {...props} />
      <Hobby row={hobby} {...props} />
      <Footer {...props} />
    </>
  );
};
