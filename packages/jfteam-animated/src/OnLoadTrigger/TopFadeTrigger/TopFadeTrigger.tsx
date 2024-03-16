import React, { ReactNode, useEffect, useState } from 'react';

import './TopFadeTrigger.css';

interface TopFadeTriggerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const TopFadeTrigger = ({
  className,
  ...props
}: TopFadeTriggerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const defaultClass = `slideTopFade ${isVisible ? 'visible' : ''}`;

  return (
    <div
      className={
        className ? ` ${defaultClass} ${className}` : defaultClass
      }
      {...props}
    />
  );
};
