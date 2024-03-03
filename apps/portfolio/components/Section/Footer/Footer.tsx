import React from 'react';

import { ActionIcon, Group, Stack, Text, Tooltip } from '@jfteam/material';

import { ELocale, EVartiant, TSectionProps, appName, headerLink, poppins } from '@/utils';

import classes from './Footer.module.css';

import { Section } from '../Section';
import { useResponsive } from '@jfteam/hooks';
import { useLocale } from '@/hooks';
import NavBarLink from '@/components/NavBar/NavBarLink/NavBarLink';

interface FooterProps extends TSectionProps {}

export const Footer = (props: FooterProps) => {
  const {} = props;

  const { locale: linkLocale } = useLocale();
  const { isDesktop } = useResponsive();

  const { logo, socialMedia } = headerLink;

  const locale: ELocale = linkLocale || ELocale.FR;

  const copyright = (
    <Text ff={poppins.style.fontFamily} c="white" fz={20}>
      © {new Date().getFullYear()} {appName}.
    </Text>
  );

  return (
    <footer>
      <Section
        variant={EVartiant.QUATERNARY}
        py={{ base: 'md', md: 'var(--section-spacing)' }}
        className={classes.footerContainer}
      >
        <Group justify="space-between">
          <Stack gap="lg">
            <NavBarLink href={`${logo.link}${locale === ELocale.FR ? '' : locale}`}>
              <logo.Icon color="white" size={50} />
            </NavBarLink>
            {isDesktop && copyright}
          </Stack>
          <Stack gap="lg">
            {isDesktop
              ? socialMedia.map(({ Icon, link, label }, index) => (
                  <Tooltip key={index} label={label}>
                    <ActionIcon
                      w={50}
                      h={50}
                      variant="transparent"
                      component="a"
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon color="white" size={32} />
                    </ActionIcon>
                  </Tooltip>
                ))
              : copyright}
          </Stack>
        </Group>
      </Section>
    </footer>
  );
};
