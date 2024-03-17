import React from 'react';

import { ELocale, EPageId, EVartiant } from '@/utils';
import { Game, NavBar } from '@/components';
import { Box, Flex, Title } from '@jfteam/material';
import Footer from '@/components/Section/Footer/Footer';

import classes from './NotFoundPage.module.css';
import { Section } from '@/components/Section/Section';
import { useResponsive } from '@jfteam/hooks';

interface NotFoundPageProps {
  locale: ELocale;
}

export const NotFoundPage = ({ locale }: NotFoundPageProps) => {
  const { isMobile } = useResponsive();

  return (
    <>
      {isMobile ? (
        <>
          <Section variant={EVartiant.TERTIARY} py={0}>
            <NavBar locale={locale} />
          </Section>
          <Flex h="80vh" align="center" justify="center">
            <Title order={1} ta="center">
              404
            </Title>
          </Flex>
        </>
      ) : (
        <>
          <Section className={classes.section} py={0} bg="none">
            <NavBar locale={locale} />
          </Section>
          <Box h={600}>
            <Game mode={EPageId.NOT_FOUND} />
          </Box>
        </>
      )}

      <Footer locale={locale} />
    </>
  );
};
