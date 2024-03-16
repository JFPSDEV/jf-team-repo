import React, { ReactNode, useEffect, useState } from 'react';

import './LeftFadeTrigger.css';

interface LeftFadeTriggerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const LeftFadeTrigger = (props: LeftFadeTriggerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`slideLeftFade ${isVisible ? 'visible' : ''}`}
      {...props}
    />
  );
};
