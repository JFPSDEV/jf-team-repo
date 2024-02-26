import React, { Fragment } from 'react';

import { useDisclosure, useResponsive } from '@jfteam/hooks';
import { cx, Group, Tooltip, type GroupProps, ActionIcon } from '@jfteam/material';
import { IconMenu2, IconMinus } from '@jfteam/icons';

import classes from './NavBar.module.css';
import NavBarLink from './NavBarLink/NavBarLink';
import { ELocale, headerLink, poppins } from '@/utils';
import { useLocale } from '@/hooks';
import NavBarMobile from './NavBarMobile/NavBarMobile';

export const NavBar = (props: GroupProps) => {
  const { className, ...groupProps } = props;

  const linkLocale = useLocale();
  const { isDesktop } = useResponsive();
  const [opened, { open, close }] = useDisclosure(false);

  const { logo, navlink, socialMedia } = headerLink;

  const locale: ELocale = linkLocale || ELocale.FR;

  const MenuIcon = opened ? IconMinus : IconMenu2;

  return (
    <>
      {!isDesktop && <NavBarMobile opened={opened} onClose={close} />}

      <Group
        justify="space-between"
        className={cx(className, classes.container)}
        {...groupProps}
        py="md"
      >
        <NavBarLink href={`${logo.link}${locale === ELocale.FR ? '' : locale}`}>
          <logo.Icon color="white" size={50} />
        </NavBarLink>

        {!isDesktop ? (
          <ActionIcon variant="transparent" onClick={open} size={50}>
            <MenuIcon color="white" size={50} strokeWidth={1.5} />
          </ActionIcon>
        ) : (
          <Fragment>
            <Group gap="xl">
              {Object.values(navlink).map((nav, index) => {
                const current = nav[locale]?.anchor;
                const anchor = current ? '#' + current : '';

                return (
                  <NavBarLink key={index} href={`/${locale}${nav[locale].link}${anchor}`}>
                    {nav[locale].value}
                  </NavBarLink>
                );
              })}
            </Group>
            <Group gap="xl">
              {socialMedia.map(({ Icon, link, label }, index) => (
                <Tooltip key={index} label={label}>
                  <ActionIcon
                    w={50}
                    h={50}
                    variant="transparent"
                    component="a"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon color="white" size={32} />
                  </ActionIcon>
                </Tooltip>
              ))}
            </Group>
          </Fragment>
        )}
      </Group>
    </>
  );
};
