import { useMediaQuery } from '@mantine/hooks';
import {
  type TBreakPoints,
  breakpoints as defaultBreakpoints
} from '@jfteam/utils';

export interface TUseResponsiveResult {
  isMobile?: boolean;
  isTablet?: boolean;
  isDesktop?: boolean;
}

export const useResponsive = (
  breakpoints: TBreakPoints = defaultBreakpoints
): TUseResponsiveResult => {
  const { sm, md } = breakpoints;

  const isMobile = useMediaQuery(`(max-width: ${md})`);
  const isTablet = useMediaQuery(
    `(min-width: ${sm}) and (max-width: ${md})`
  );
  const isDesktop = useMediaQuery(`(min-width: ${md})`);

  return { isMobile, isTablet, isDesktop };
};
