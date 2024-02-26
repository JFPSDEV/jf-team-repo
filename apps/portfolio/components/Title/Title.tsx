import { Title as MaterialTitle, TitleProps as MaterialTitleProps } from '@jfteam/material';
import React from 'react';

interface TitleProps extends MaterialTitleProps {
  rows: string[];
}

export const Title = ({ rows, ...titleProps }: TitleProps) => {
  return (
    <MaterialTitle order={1} {...titleProps}>
      {rows?.map((row, index) => (
        <React.Fragment key={index}>
          {row.toUpperCase()} {index !== rows.length - 1 && <br />}
        </React.Fragment>
      ))}
    </MaterialTitle>
  );
};
