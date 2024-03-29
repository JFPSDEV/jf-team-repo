import React from 'react';
import dynamic from 'next/dynamic';

import { Skeleton, TextInput } from '@jfteam/material';
import { useResponsive } from '@jfteam/hooks';

import { ELocale, EPageId, ICVPage } from '@/utils';
import { Hero } from '@/components/Section';
import { Page } from '../Page';

const DynamicStudy = dynamic(() => import('../../Section/Study/Study'), {
  loading: () => <Skeleton visible={true} />,
});
const DynamicSkill = dynamic(() => import('../../Section/Skill/Skill'));
const DynamicHobby = dynamic(() => import('../../Section/Hobby/Hobby'));
const DynamicFooter = dynamic(() => import('../../Section/Footer/Footer'));
const DynamicPresentation = dynamic(() => import('../../Section/Presentation/Presentation'));
const DynamicExperience = dynamic(() => import('../../Section/Experience/Experience'));

interface CVPageProps {
  page: ICVPage;
  locale: ELocale;
}

const CVPage = ({ page, locale }: CVPageProps) => {
  const { ...props } = useResponsive();

  if (!page) return null;

  const { presentation, study, experience, skill, hobby } = page;

  return (
    <Page {...props} locale={locale} page={EPageId.CV}>
      <DynamicPresentation row={presentation} {...props} />
      <DynamicStudy row={study} {...props} />
      <DynamicExperience row={experience} {...props} />
      <DynamicSkill row={skill} {...props} />
      <DynamicHobby row={hobby} {...props} />
      <DynamicFooter {...props} locale={locale} />
    </Page>
  );
};

export default CVPage;
