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
import DrawerMobileLink from './DrawerMobileLink/DrawerMobileLink';
import { ENIcon, FRIcon, IconMoonStars, IconSun } from '@jfteam/icons';
import { capitalize } from '@jfteam/utils';

interface DrawerMobileProps extends DrawerProps {
  locale: ELocale;
}

const DrawerMobile = (props: DrawerMobileProps) => {
  const { locale, onClose, ...drawerProps } = props;

  const { switchLocale } = useLocale();
  const { navlink, socialMedia } = headerLink;
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const color = colorScheme === 'dark' ? 'white' : 'black';
  const viewMode = colorScheme === 'dark' ? 'light' : 'dark';

  const otherLocale = locale === ELocale.FR ? ELocale.EN : ELocale.FR;

  return (
    <Drawer position="right" {...drawerProps} onClose={onClose}>
      <Stack>
        {Object.values(navlink).map((nav, index) => {
          const current = nav[locale]?.anchor;
          const anchor = current ? '#' + current : '';

          return (
            <Fragment key={index}>
              <NavBarLink href={`/${locale}${nav[locale].link}${anchor}`} onClick={onClose}>
                <DrawerMobileLink Icon={nav.Icon} color={color}>
                  {nav[locale].value}
                </DrawerMobileLink>
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
              <DrawerMobileLink Icon={Icon} color={color}>
                {label}
              </DrawerMobileLink>
            </a>
            <Divider />
          </Fragment>
        ))}

        <DrawerMobileLink
          onClick={() => switchLocale(otherLocale)}
          Icon={otherLocale === ELocale.FR ? FRIcon : ENIcon}
          color={color}
          style={{ cursor: 'pointer' }}
        >
          {otherLocale.toUpperCase()}
        </DrawerMobileLink>

        <Divider />

        <DrawerMobileLink
          onClick={() => setColorScheme(viewMode)}
          Icon={colorScheme === 'dark' ? IconSun : IconMoonStars}
          color={color}
          style={{ cursor: 'pointer' }}
        >
          {capitalize(`${viewMode} mode`)}
        </DrawerMobileLink>

        <Divider />
      </Stack>
    </Drawer>
  );
};

export default DrawerMobile;
