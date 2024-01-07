import { useMediaQuery } from '@mantine/hooks';

export const useResponsive = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return { isMobile };
};
