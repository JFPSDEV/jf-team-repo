import React from 'react';

import { useResponsive } from '@jfteam/hooks';
import { cx, Group, type GroupProps } from '@jfteam/material';
import { GitHubIcon, LinkedInIcon, IconMenu2, JFLogoIcon } from '@jfteam/icons';

import classes from './NavBar.module.css';
import NavBarFont from './NavBarFont/NavBarFont';

export const NavBar = (props: GroupProps) => {
  const { className, ...groupProps } = props;

  const { isMobile } = useResponsive();

  return (
    <Group
      justify="space-between"
      className={cx(className, classes.container)}
      {...groupProps}
      py="md"
    >
      <JFLogoIcon color="white" size={70} />

      {isMobile ? (
        <IconMenu2 color="white" size={50} />
      ) : (
        <>
          <Group gap="xl">
            <NavBarFont>Mon CV</NavBarFont>
            <NavBarFont>Mes projets</NavBarFont>
            <NavBarFont>Contact</NavBarFont>
          </Group>
          <Group gap="xl">
            <GitHubIcon color="white" size={32} />
            <LinkedInIcon color="white" size={32} />
          </Group>
        </>
      )}
    </Group>
  );
};
