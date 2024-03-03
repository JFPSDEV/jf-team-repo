import React, { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [isMobile, setIsPhoneSize] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsPhoneSize(window?.innerWidth <= 768);
      setLoading(false);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { loading, isMobile };
};
