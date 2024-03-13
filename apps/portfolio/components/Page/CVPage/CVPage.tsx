import React from 'react';

import { useResponsive } from '@jfteam/hooks';

import { EPageId, ICVPage } from '@/utils';
import { Hero } from '@/components/Section';
import {
  DynamicPresentation,
  DynamicStudy,
  DynamicExperience,
  DynamicSkill,
  DynamicHobby,
  DynamicFooter,
} from './dynamic';

interface CVPageProps {
  page: ICVPage;
}

const CVPage = ({ page }: CVPageProps) => {
  const { ...props } = useResponsive();

  if (!page) return null;

  const { presentation, study, experience, skill, hobby } = page;

  return (
    <>
      <Hero {...props} mode={EPageId.CV} />
      <DynamicPresentation row={presentation} {...props} />
      <DynamicStudy row={study} {...props} />
      <DynamicExperience row={experience} {...props} />
      <DynamicSkill row={skill} {...props} />
      <DynamicHobby row={hobby} {...props} />
      <DynamicFooter {...props} />
    </>
  );
};

export default CVPage;
