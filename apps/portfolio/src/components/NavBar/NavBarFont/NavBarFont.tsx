import React from 'react';

import { Poppins } from 'next/font/google';
import { Text, type TextProps } from '@jfteam/material';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

interface NavBarFontProps extends TextProps {}

const NavBarFont = (props: NavBarFontProps) => {
  const { fw, ...textProps } = props;

  return (
    <Text
      ff={poppins.style.fontFamily}
      fw={fw}
      c='white'
      fz={20}
      {...textProps}
    />
  );
};

export default NavBarFont;
