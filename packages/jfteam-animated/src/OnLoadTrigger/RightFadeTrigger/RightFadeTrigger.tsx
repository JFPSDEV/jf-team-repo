import React, { ReactNode, useEffect, useState } from 'react';

import './RightFadeTrigger.css';

interface RightFadeTriggerProps {
  children: ReactNode;
}

export const RightFadeTrigger = ({ children }: RightFadeTriggerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`slideFade ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};
