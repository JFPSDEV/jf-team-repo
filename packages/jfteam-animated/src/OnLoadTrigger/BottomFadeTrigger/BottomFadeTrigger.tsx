import React, { ReactNode, useEffect, useState } from 'react';

import './BottomFadeTrigger.css';

interface BottomFadeTriggerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const BottomFadeTrigger = (props: BottomFadeTriggerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`slideBottomFade ${isVisible ? 'visible' : ''}`}
      {...props}
    />
  );
};
