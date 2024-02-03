import { breakpoints } from '@jfteam/utils';
import { rem, type MantineThemeOverride, MantineBreakpointsValues } from '@jfteam/material';

import { poetsenOneRegular } from './fonts';
import { getResponsiveFontSize } from './get-responsive-font-size';

export const getFontTheme = (width: number): MantineThemeOverride => ({
  breakpoints: breakpoints as Record<(MantineBreakpointsValues & string) | number | symbol, string>,
  headings: {
    fontFamily: poetsenOneRegular.style.fontFamily,
    fontWeight: '400',
    sizes: {
      h1: {
        fontSize: getResponsiveFontSize({ current: width, desktop: 64, mobile: 34 }),
        lineHeight: 'normal',
      },
      h2: {
        fontSize: rem(36),
        lineHeight: 'normal',
      },
      h3: {
        fontSize: rem(16),
        lineHeight: 'normal',
      },
      h4: {},
      h5: {},
      h6: {},
    },
  },
});
