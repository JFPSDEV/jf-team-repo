import dynamic from 'next/dynamic';

import { Skeleton } from '@jfteam/material';

export const DynamicPreface = dynamic(() => import('../../Section/Preface/Preface'), {
  loading: () => <Skeleton visible={true} />,
});

export const DynamicTechno = dynamic(() => import('../../Section/Techno/Techno'));

export const DynamicProject = dynamic(() => import('../../Section/Project/Project'));

export const DynamicTestimonial = dynamic(() => import('../../Section/Testimonial/Testimonial'));

export const DynamicContact = dynamic(() => import('../../Section/Contact/Contact'));

export const DynamicFooter = dynamic(() => import('../../Section/Footer/Footer'));
