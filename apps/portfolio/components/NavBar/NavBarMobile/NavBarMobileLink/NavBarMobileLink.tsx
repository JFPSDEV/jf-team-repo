import { poppins } from '@/utils';
import { IconProps } from '@jfteam/icons';
import { Group, GroupProps, Text } from '@jfteam/material';
import React from 'react';

interface NavBarMobileLinkProps extends GroupProps {
  Icon: (props: IconProps) => React.JSX.Element;
  children: string;
  color?: string;
}

export const NavBarMobileLink = ({
  Icon,
  color = 'white',
  children,
  ...groupProps
}: NavBarMobileLinkProps) => {
  return (
    <Group {...groupProps}>
      <Icon color={color} size={22} />
      <Text ff={poppins.style.fontFamily} c={color} fz={20}>
        {children}
      </Text>
    </Group>
  );
};

export default NavBarMobileLink;
