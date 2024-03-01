import { breakpoints } from '@jfteam/utils';
import { rem, type MantineThemeOverride, MantineBreakpointsValues } from '@jfteam/material';

import { poetsenOneRegular, montserrat } from './fonts';

export const fontTheme: MantineThemeOverride = {
  breakpoints: breakpoints as Record<(MantineBreakpointsValues & string) | number | symbol, string>,
  fontFamily: montserrat.style.fontFamily,
  headings: {
    fontFamily: poetsenOneRegular.style.fontFamily,
    fontWeight: '400',
    sizes: {
      h1: {
        fontSize: rem(64),
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
};
