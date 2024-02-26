import { useMediaQuery } from '@mantine/hooks';
import {
  type TBreakPoints,
  breakpoints as defaultBreakpoints
} from '@jfteam/utils';

export const useResponsive = (
  breakpoints: TBreakPoints = defaultBreakpoints
) => {
  const { xs, sm, md, lg, xl } = breakpoints;
  const isBreakpoints = {
    xs: useMediaQuery(`(min-width: ${xs})`),
    sm: useMediaQuery(`(min-width: ${sm})`),
    md: useMediaQuery(`(min-width: ${md})`),
    lg: useMediaQuery(`(min-width: ${lg})`),
    xl: useMediaQuery(`(min-width: ${xl})`)
  };

  const isMobile = useMediaQuery(`(max-width: ${md})`);
  const isTablet = useMediaQuery(
    `(min-width: ${sm}) and (max-width: ${md})`
  );
  const isDesktop = useMediaQuery(`(min-width: ${md})`);

  return { isMobile, isTablet, isDesktop, ...isBreakpoints };
};
