import React from 'react';

import { Box, Container, type ContainerProps, cx } from '@jfteam/material';

import classes from './Section.module.css';

import { EVartiant, lightDarkModeClasses } from '@/utils';

interface SectionProps extends Omit<ContainerProps, 'variant'> {
  variant?: EVartiant;
}

export const Section = (props: SectionProps) => {
  const { className, bg, variant = EVartiant.PRIMARY, ...containerProps } = props;

  return (
    <Box
      className={cx(
        className,
        classes.container,
        variant === EVartiant.PRIMARY
          ? lightDarkModeClasses.bgPrimary
          : variant === EVartiant.SECONDARY
            ? lightDarkModeClasses.bgSecondary
            : variant === EVartiant.TERTIARY
              ? lightDarkModeClasses.bgTertiary
              : lightDarkModeClasses.bgQuaternary
      )}
      bg={bg}
    >
      <Container
        size="lg"
        className={classes.section}
        py="var(--section-spacing)"
        {...containerProps}
      />
    </Box>
  );
};
