import React from 'react';

import { Text, type TextProps } from '@jfteam/material';

import { poppins } from '../../../utils';

interface NavBarFontProps {
  children: string;
  fw?: number;
}

const NavBarFont = (props: NavBarFontProps) => {
  const { fw, ...textProps } = props;

  return <Text ff={poppins.style.fontFamily} fw={fw} c="white" fz={20} {...textProps} />;
};

export default NavBarFont;
