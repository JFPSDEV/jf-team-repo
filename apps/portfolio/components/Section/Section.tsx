import React from 'react';

import { Box, Container, type ContainerProps, cx } from '@jfteam/material';

import classes from './Section.module.css';

import { EVartiant, type TVariant, lightDarkModeClasses } from '@/utils';

interface SectionProps extends ContainerProps {
  variant?: TVariant;
}

export const Section = (props: SectionProps) => {
  const { className, bg, variant = EVartiant.primary, ...containerProps } = props;

  return (
    <Box
      className={cx(
        className,
        classes.container,
        variant === EVartiant.primary
          ? lightDarkModeClasses.bgPrimary
          : lightDarkModeClasses.bgSecondary
      )}
      bg={bg}
    >
      <Container size="lg" className={classes.section} {...containerProps} />
    </Box>
  );
};
