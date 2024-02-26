import React from 'react';

import classes from './IconStyle.module.css';

interface IconStyleProps {
  size?: number;
  value: string;
  color?: string;
}

export const IconStyle = ({ value, size = 25, color }: IconStyleProps) => {
  return (
    <i
      className={`${value} ${classes.customIcon}`}
      style={{ fontSize: size }}
    />
  );
};
