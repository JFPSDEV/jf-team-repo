import { useMediaQuery } from '@mantine/hooks';

export const useResponsive = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isTablet = useMediaQuery(
    '(min-width: 601px) and (max-width: 1024px)'
  );

  return { isMobile, isTablet };
};
