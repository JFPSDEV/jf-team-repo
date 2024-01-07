import React from 'react';

import { Group } from '@jfteam/material';

import { LinearBox } from './LinearBox/LinearBox';

export const BgLinear = () => {
  return (
    <Group h="100%" justify="space-between">
      <LinearBox />
      <LinearBox />
    </Group>
  );
};
