import React from 'react';

import { Text, type TextProps } from '@jfteam/material';

import { poppins } from '../../../utils';
import Link, { LinkProps } from 'next/link';

interface NavBarLinkProps extends Pick<LinkProps, 'href'> {
  children: string;
  fw?: number;
}

const NavBarLink = (props: NavBarLinkProps) => {
  const { fw, href, ...textProps } = props;

  return (
    <Link href={href} style={{ textDecoration: 'none' }}>
      <Text ff={poppins.style.fontFamily} fw={fw} c="white" fz={20} {...textProps} />
    </Link>
  );
};

export default NavBarLink;
