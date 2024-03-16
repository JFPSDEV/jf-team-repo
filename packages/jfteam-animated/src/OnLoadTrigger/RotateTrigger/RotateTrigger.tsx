import React, { ReactNode, useEffect, useState } from 'react';

import './RotateTrigger.css';

interface RotateTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const RotateTrigger = ({ ...props }: RotateTriggerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`slideRotateFade ${isVisible ? 'visible' : ''}`}
      {...props}
    />
  );
};
