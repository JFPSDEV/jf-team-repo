import React from 'react';

import { Box, Flex, Group } from '@jfteam/material';
import {
  GitHubIcon,
  LinkedInIcon,
  JFLogoIcon,
  AngularIcon,
  ApolloIcon,
  GraphqlIcon,
} from '@jfteam/icons';
import { useSpring, animated, config } from '@jfteam/animated';

import classes from './Techno.module.css';

interface TechnoProps {}

export const Techno = () => {
  return (
    <Flex className={classes.container} align="center">
      <Box className={classes.scroll}>
        <Box style={{ display: 'flex', gap: 200 }} mr={200}>
          <AngularIcon size={70} />
          <ApolloIcon size={70} />
          <GraphqlIcon size={70} />
          <AngularIcon size={70} />
          <ApolloIcon size={70} />
          <GraphqlIcon size={70} />
          <AngularIcon size={70} />
          <ApolloIcon size={70} />
          <GraphqlIcon size={70} />
          <ApolloIcon size={70} />
        </Box>
        <Box style={{ display: 'flex', gap: 200 }}>
          <AngularIcon size={70} />
          <ApolloIcon size={70} />
          <GraphqlIcon size={70} />
          <AngularIcon size={70} />
          <ApolloIcon size={70} />
          <GraphqlIcon size={70} />
          <AngularIcon size={70} />
          <ApolloIcon size={70} />
          <GraphqlIcon size={70} />
          <ApolloIcon size={70} />
        </Box>
      </Box>
    </Flex>
  );
};
