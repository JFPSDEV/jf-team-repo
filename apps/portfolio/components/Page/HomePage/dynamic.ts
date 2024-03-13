import dynamic from 'next/dynamic';

export const DynamicPreface = dynamic(() => import('../../Section/Preface/Preface'));

export const DynamicTechno = dynamic(() => import('../../Section/Techno/Techno'));

export const DynamicProject = dynamic(() => import('../../Section/Project/Project'));

export const DynamicTestimonial = dynamic(() => import('../../Section/Testimonial/Testimonial'));

export const DynamicContact = dynamic(() => import('../../Section/Contact/Contact'));

export const DynamicFooter = dynamic(() => import('../../Section/Footer/Footer'));
