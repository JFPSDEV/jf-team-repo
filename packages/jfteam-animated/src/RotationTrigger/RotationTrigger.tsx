import React, { useRef, useEffect, ReactNode } from 'react';

import gsap from 'gsap';
import { ETrigger } from '..';

interface RotationTriggerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  duration?: number;
  from?: number;
  to?: number;
  trigger?: ETrigger;
  children: ReactNode;
}

export const RotationTrigger = (props: RotationTriggerProps) => {
  const {
    children,
    to = 0,
    from = 25,
    duration = 1,
    trigger,
    ...divProps
  } = props;
  const ref = useRef(null);

  useEffect(() => {
    const el = ref?.current;
    if (el) {
      gsap.fromTo(
        el,
        { rotation: from },
        {
          rotation: to,
          duration,
          ...(trigger ? { [trigger]: { trigger: el } } : {})
        }
      );
    }
  }, []);

  return (
    <div ref={ref} {...divProps}>
      {children}
    </div>
  );
};
