import React, { Fragment } from 'react';

import { useLocale } from '@/hooks';
import { ELocale, headerLink } from '@/utils';
import { Divider, Drawer, Stack, type DrawerProps } from '@jfteam/material';

import NavBarLink from '../NavBarLink/NavBarLink';
import NavBarMobileLink from './NavBarMobileLink/NavBarMobileLink';

interface NavBarMobileProps extends DrawerProps {}

const NavBarMobile = (props: NavBarMobileProps) => {
  const { ...drawerProps } = props;

  const linkLocale = useLocale();
  const { navlink, socialMedia } = headerLink;

  const locale: ELocale = linkLocale || ELocale.FR;

  return (
    <Drawer position="right" {...drawerProps}>
      <Stack>
        {Object.values(navlink).map((nav, index) => {
          const current = nav[locale]?.anchor;
          const anchor = current ? '#' + current : '';

          return (
            <Fragment key={index}>
              <NavBarLink href={`/${locale}${nav[locale].link}${anchor}`}>
                <NavBarMobileLink Icon={nav.Icon}>{nav[locale].value}</NavBarMobileLink>
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
              <NavBarMobileLink Icon={Icon}>{label}</NavBarMobileLink>
            </a>
            <Divider />
          </Fragment>
        ))}
      </Stack>
    </Drawer>
  );
};

export default NavBarMobile;
