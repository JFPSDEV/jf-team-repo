import { poppins } from '@/utils';
import { IconProps } from '@jfteam/icons';
import { Group, Text } from '@jfteam/material';
import React from 'react';

interface NavBarMobileLinkProps {
  Icon: (props: IconProps) => React.JSX.Element;
  children: string;
}

export const NavBarMobileLink = ({ Icon, children }: NavBarMobileLinkProps) => {
  return (
    <Group>
      <Icon color="white" size={22} />
      <Text ff={poppins.style.fontFamily} c="white" fz={20}>
        {children}
      </Text>
    </Group>
  );
};

export default NavBarMobileLink;
