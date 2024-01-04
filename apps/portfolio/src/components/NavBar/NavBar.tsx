import React from 'react';

import { GitHubIcon, LinkedInIcon } from '@jfteam/font';
import { Group, type GroupProps } from '@jfteam/material';

import { Logo } from '../Logo/Logo';
import { useStyles } from './NavBar.styles';
import NavBarFont from './NavBarFont/NavBarFont';

export const NavBar = (props: GroupProps) => {
  const { className, ...groupProps } = props;

  const { cx, classes } = useStyles();

  return (
    <Group
      position='apart'
      className={cx(className, classes.container)}
      {...groupProps}
    >
      <Logo color='white' size={70} />

      <Group spacing='xl'>
        <NavBarFont>Mon CV</NavBarFont>
        <NavBarFont>Mes projets</NavBarFont>
        <NavBarFont>Contact</NavBarFont>
      </Group>

      <Group spacing='xl'>
        <GitHubIcon color='white' size={32} />
        <LinkedInIcon color='white' size={32} />
      </Group>
    </Group>
  );
};
