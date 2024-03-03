import React, { Fragment } from 'react';

import { useLocale } from '@/hooks';
import { ELocale, headerLink } from '@/utils';
import {
  Divider,
  Drawer,
  Stack,
  type DrawerProps,
  useMantineColorScheme,
  SegmentedControl,
  Button,
} from '@jfteam/material';

import NavBarLink from '../NavBarLink/NavBarLink';
import NavBarMobileLink from './NavBarMobileLink/NavBarMobileLink';
import { ENIcon, FRIcon, IconMoonStars, IconSun } from '@jfteam/icons';
import { capitalize } from '@jfteam/utils';

interface NavBarMobileProps extends DrawerProps {}

const NavBarMobile = (props: NavBarMobileProps) => {
  const { ...drawerProps } = props;

  const { locale: linkLocale, switchLocale } = useLocale();
  const { navlink, socialMedia } = headerLink;
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const color = colorScheme === 'dark' ? 'white' : 'black';
  const viewMode = colorScheme === 'dark' ? 'light' : 'dark';

  const locale: ELocale = linkLocale || ELocale.FR;
  const otherLocale = locale === ELocale.FR ? ELocale.EN : ELocale.FR;

  return (
    <Drawer position="right" {...drawerProps}>
      <Stack>
        {Object.values(navlink).map((nav, index) => {
          const current = nav[locale]?.anchor;
          const anchor = current ? '#' + current : '';

          return (
            <Fragment key={index}>
              <NavBarLink href={`/${locale}${nav[locale].link}${anchor}`}>
                <NavBarMobileLink Icon={nav.Icon} color={color}>
                  {nav[locale].value}
                </NavBarMobileLink>
              </NavBarLink>

              <Divider />
            </Fragment>
          );
        })}

        {socialMedia.map(({ Icon, link, label }, index) => (
          <Fragment key={index}>
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <NavBarMobileLink Icon={Icon} color={color}>
                {label}
              </NavBarMobileLink>
            </a>
            <Divider />
          </Fragment>
        ))}

        <NavBarMobileLink
          onClick={() => switchLocale(otherLocale)}
          Icon={otherLocale === ELocale.FR ? FRIcon : ENIcon}
          color={color}
          style={{ cursor: 'pointer' }}
        >
          {otherLocale.toUpperCase()}
        </NavBarMobileLink>

        <Divider />

        <NavBarMobileLink
          onClick={() => setColorScheme(viewMode)}
          Icon={colorScheme === 'dark' ? IconSun : IconMoonStars}
          color={color}
          style={{ cursor: 'pointer' }}
        >
          {capitalize(`${viewMode} mode`)}
        </NavBarMobileLink>

        <Divider />
      </Stack>
    </Drawer>
  );
};

export default NavBarMobile;
