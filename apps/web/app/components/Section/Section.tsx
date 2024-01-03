import React from 'react';

import { Container, type ContainerProps } from '@jfteam/material';

import { useStyles } from './Section.styles';

export const Section = (props: ContainerProps) => {
  const { className, ...containerProps } = props;

  const { cx, classes } = useStyles();

  return (
    <Container
      size='md'
      className={cx(className, classes.container)}
      {...containerProps}
    />
  );
};
