import { poppins } from '@/utils';
import { IconProps } from '@jfteam/icons';
import { Group, GroupProps, Text } from '@jfteam/material';
import React from 'react';

interface DrawerMobileLinkProps extends GroupProps {
  Icon: (props: IconProps) => React.JSX.Element;
  children: string;
  color?: string;
}

export const DrawerMobileLink = ({
  Icon,
  color = 'white',
  children,
  ...groupProps
}: DrawerMobileLinkProps) => {
  return (
    <Group {...groupProps}>
      <Icon color={color} size={22} />
      <Text ff={poppins.style.fontFamily} c={color} fz={20}>
        {children}
      </Text>
    </Group>
  );
};

export default DrawerMobileLink;
