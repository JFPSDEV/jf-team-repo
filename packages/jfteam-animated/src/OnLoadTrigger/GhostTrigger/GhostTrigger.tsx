import React, { ReactNode, useEffect, useState } from 'react';
import './GhostTrigger.css';

interface GhostTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const GhostTrigger = ({ ...props }: GhostTriggerProps) => {
  const [isGhosting, setIsGhosting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsGhosting(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`ghostTrigger ${isGhosting ? 'ghosting' : ''}`}
      {...props}
    />
  );
};
