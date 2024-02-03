import React from 'react';

import { Box, Container, type ContainerProps, cx } from '@jfteam/material';

import { BgLinear } from './BgLinear/BgLinear';

import classes from './Section.module.css';
import { useResponsive } from '@jfteam/hooks';

interface SectionProps extends ContainerProps {
  isDashed: boolean;
}

export const Section = (props: SectionProps) => {
  const { className, isDashed, bg, ...containerProps } = props;

  const { isMobile } = useResponsive();

  return (
    <Box className={cx(className, classes.container)} bg={bg}>
      <Container size="lg" className={classes.section} {...containerProps} />
      {!isMobile && isDashed && (
        <Container size="lg" className={classes.gridContainer}>
          <BgLinear />
        </Container>
      )}
    </Box>
  );
};
