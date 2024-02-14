import React from 'react';

import Link from 'next/link';

import { useResponsive } from '@jfteam/hooks';
import { cx, Group, type GroupProps } from '@jfteam/material';
import { GitHubIcon, LinkedInIcon, IconMenu2, JFLogoIcon } from '@jfteam/icons';

import classes from './NavBar.module.css';
import NavBarLink from './NavBarLink/NavBarLink';

export const NavBar = (props: GroupProps) => {
  const { className, ...groupProps } = props;

  const { isDesktop } = useResponsive();

  return (
    <Group
      justify="space-between"
      className={cx(className, classes.container)}
      {...groupProps}
      py="md"
    >
      <JFLogoIcon color="white" size={70} />

      {!isDesktop ? (
        <IconMenu2 color="white" size={50} />
      ) : (
        <>
          <Group gap="xl">
            <NavBarLink href="cv">Mon CV</NavBarLink>
            <NavBarLink href="/#project">Mes projets</NavBarLink>
            <NavBarLink href="/#contact">Contact</NavBarLink>
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
