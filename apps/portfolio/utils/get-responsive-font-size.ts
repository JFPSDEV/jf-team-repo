import { em, rem } from '@jfteam/material';
import { breakpoints, emToNb } from '@jfteam/utils';
const { xs } = breakpoints;

interface TGetResponsiveFontSizeParams {
  current: number;
  desktop: number;
  mobile: number;
}

export const getResponsiveFontSize = ({
  current,
  desktop,
  mobile,
}: TGetResponsiveFontSizeParams) => (emToNb(em(current)) > emToNb(xs) ? rem(desktop) : rem(mobile));
