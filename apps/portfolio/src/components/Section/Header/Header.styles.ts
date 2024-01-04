import { createStyles } from '@jfteam/material';

interface TParams {
  width?: string | number | undefined;
  height?: string | number | undefined;
}

export const useStyles = createStyles(
  (theme, { width, height }: TParams) => ({
    mainContainer: {
      position: 'absolute',
      width: '100%',
      zIndex: 1
    },
    navbar: {
      height: 100
    },
    header: {
      width,
      height,
      '-webkit-clip-path': 'polygon(0 0, 0 100%, 100% 80%, 100% 0)',
      clipPath: 'polygon(0 0, 0 100%, 100% 70%, 100% 0)'
    }
  })
);
