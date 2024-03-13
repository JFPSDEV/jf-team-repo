import dynamic from 'next/dynamic';

import { Skeleton } from '@jfteam/material';

export const DynamicStudy = dynamic(() => import('../../Section/Study/Study'), {
  loading: () => <Skeleton visible={true} />,
});
export const DynamicSkill = dynamic(() => import('../../Section/Skill/Skill'));
export const DynamicHobby = dynamic(() => import('../../Section/Hobby/Hobby'));
export const DynamicFooter = dynamic(() => import('../../Section/Footer/Footer'));
export const DynamicPresentation = dynamic(() => import('../../Section/Presentation/Presentation'));
export const DynamicExperience = dynamic(() => import('../../Section/Experience/Experience'));
