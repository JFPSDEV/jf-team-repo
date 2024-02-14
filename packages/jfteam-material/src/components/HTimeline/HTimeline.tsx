import React, { ReactNode } from 'react';

import {
  ActionIcon,
  Box,
  BoxProps,
  Flex,
  FlexProps,
  Group
} from '@mantine/core';

import classes from './HTimeline.module.css';

export interface HTimelineItemProps {
  bulletSize?: number;
  lineHeight?: BoxProps['h'];
  lineWidth?: BoxProps['w'];
  color?: string;
  children?: ReactNode;
  icon?: ReactNode;
}

const HTimelineItem = (props: HTimelineItemProps) => {
  const { children, color, bulletSize, lineHeight, lineWidth, icon } =
    props;
  return (
    <Group
      gap={0}
      w={`calc(${lineWidth} + ${bulletSize}px)`}
      className={classes.groupItemContainer}
    >
      <Box className={classes.itemContainer}>
        <ActionIcon
          className={classes.actionIcon}
          h={bulletSize}
          w={bulletSize}
          bg={color}
        >
          {icon}
        </ActionIcon>
        <Box className={classes.childrenItemContainer}>{children}</Box>
      </Box>
      <Box bg={color} h={lineHeight} w={`calc(100% - ${bulletSize}px)`} />
    </Group>
  );
};

export interface HTimelineProps extends FlexProps {
  children: ReactNode;
}

export const HTimeline = (props: HTimelineProps) => {
  const { children, ...other } = props;
  return (
    <Flex gap={0} w='100%' {...other}>
      {children}
    </Flex>
  );
};

HTimeline.Item = HTimelineItem;
