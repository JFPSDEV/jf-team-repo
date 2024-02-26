import React, { ReactNode } from 'react';

import { Text, type TextProps } from '@jfteam/material';

import { poppins } from '../../../utils';
import Link, { LinkProps } from 'next/link';

interface NavBarLinkProps extends Pick<LinkProps, 'href'> {
  children: ReactNode;
  fw?: number;
}

const NavBarLink = (props: NavBarLinkProps) => {
  const { fw, href, children, ...textProps } = props;

  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      {typeof children === 'string' ? (
        <Text ff={poppins.style.fontFamily} fw={fw} c="white" fz={20} {...textProps}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Link>
  );
};

export default NavBarLink;
