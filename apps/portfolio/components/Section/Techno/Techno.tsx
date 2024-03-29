import React from 'react';

import { Box, Flex, cx } from '@jfteam/material';
import {
  NestJsIcon,
  AngularIcon,
  ApolloIcon,
  GraphqlIcon,
  NextJSIcon,
  NodeJSIcon,
  ReactIcon,
  TurboRepoIcon,
  TypescriptIcon,
  VueJSIcon,
  JavaIcon,
  SpringBootIcon,
} from '@jfteam/icons';

import classes from './Techno.module.css';
import { generateUUID } from '@jfteam/utils';
import { lightDarkModeClasses, type TSectionProps } from '@/utils';

const technoList = [
  ReactIcon,
  TypescriptIcon,
  GraphqlIcon,
  JavaIcon,
  ApolloIcon,
  NextJSIcon,
  TurboRepoIcon,
  NestJsIcon,
  SpringBootIcon,
  NodeJSIcon,
  AngularIcon,
  VueJSIcon,
];

interface TechnoProps extends TSectionProps {}

const Techno = ({ isMobile }: TechnoProps) => {
  const iconBand = (
    <Box>
      {[...technoList, ...technoList].map((Icon) => (
        <Icon key={generateUUID()} size={70} className={classes.icon} />
      ))}
    </Box>
  );

  return (
    <Flex
      className={cx(classes.container, lightDarkModeClasses.bgSecondary)}
      align="center"
      py="var(--section-spacing)"
    >
      <Box className={cx(classes.scroll, classes.imgBox)}>
        {iconBand}
        {iconBand}
      </Box>
    </Flex>
  );
};

export default Techno;
