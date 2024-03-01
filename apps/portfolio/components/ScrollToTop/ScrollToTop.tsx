import React, { useState, useEffect } from 'react';

import classes from './ScrollToTopButton.module.css';
import { ActionIcon, cx } from '@jfteam/material';
import { IconChevronUp } from '@jfteam/icons';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ActionIcon
      variant="filled"
      size="xl"
      onClick={scrollToTop}
      className={cx(classes.scrollTopButton, isVisible ? classes.fadeIn : classes.fadeOut)}
    >
      <IconChevronUp />
    </ActionIcon>
  );
};
