import React from 'react';

import { Title as MaterialTitle, TitleProps as MaterialTitleProps, rem } from '@jfteam/material';
import { useResponsive } from '@jfteam/hooks';

interface TitleProps extends MaterialTitleProps {
  rows: string[];
}

const fz: MaterialTitleProps['fz'][] = [
  { base: rem(34), sm: rem(54), md: rem(64) },
  { base: rem(28), md: rem(36) },
  { base: rem(16) },
];

export const Title = ({ rows, order = 1, ...titleProps }: TitleProps) => {
  return (
    <MaterialTitle order={order} {...titleProps} fz={fz[order - 1]}>
      {rows?.map((row, index) => (
        <React.Fragment key={index}>
          {row.toUpperCase()} {index !== rows.length - 1 && <br />}
        </React.Fragment>
      ))}
    </MaterialTitle>
  );
};
