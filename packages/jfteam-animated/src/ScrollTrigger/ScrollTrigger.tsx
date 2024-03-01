import React, { Fragment, ReactNode } from 'react';

import gsap from 'gsap';
import { ScrollTrigger as GsapScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(GsapScrollTrigger);

interface ScrollTriggerProps {
  children: ReactNode;
}

export const ScrollTrigger = (props: ScrollTriggerProps) => {
  const { children } = props;

  return <Fragment> {children}</Fragment>;
};
