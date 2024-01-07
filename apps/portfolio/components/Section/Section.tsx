import React from 'react';

import { Box, Container, type ContainerProps, cx } from '@jfteam/material';

import { BgLinear } from './BgLinear/BgLinear';

import classes from './Section.module.css';
import { useResponsive } from '@jfteam/hooks';

interface SectionProps extends ContainerProps {
  isDashed: boolean;
}

export const Section = (props: SectionProps) => {
  const { className, isDashed, ...containerProps } = props;

  const { isMobile } = useResponsive();

  return (
    <Box className={cx(className, classes.container)}>
      <Container size="md" className={classes.section} {...containerProps} />
      {!isMobile && isDashed && (
        <Container className={classes.gridContainer}>
          <BgLinear />
        </Container>
      )}
    </Box>
  );
};
