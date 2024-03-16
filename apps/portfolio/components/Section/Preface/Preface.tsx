import React, { ReactNode } from 'react';

import Image from 'next/image';
import { FunnyArrowIcon } from '@jfteam/icons';
import { Grid, Stack, Text, Flex, Button, Box } from '@jfteam/material';

import { Section } from '../Section';
import classes from './Preface.module.css';
import { Title } from '@/components/Title/Title';
import { type IPreface, type TSectionProps, poppins, poetsenOneRegular, ELocale } from '@/utils';
import { RightFadeTrigger, RotateTrigger, BottomFadeTrigger, GhostTrigger } from '@jfteam/animated';
import { useLocale } from '@/hooks';
import Link from 'next/link';

const sizeBlock = 400;

interface PrefaceProps extends TSectionProps {
  row: IPreface;
}

const Preface = ({ row, isMobile, isDesktop }: PrefaceProps) => {
  const { locale: linkLocale } = useLocale();
  const locale: ELocale = linkLocale || ELocale.FR;

  const CVLink = ({ children }: { children: ReactNode }) => {
    return <Link href={`/${locale}/cv`}>{children}</Link>;
  };

  return (
    <Section py={0} className={classes.section} bg="transparent">
      <RightFadeTrigger>
        <Grid gutter={{ base: 'lg', lg: 'var(--section-spacing)' }} className={classes.grid}>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Stack w="100%" h="100%" align="end">
              <Stack
                gap="lg"
                justify="center"
                w={{ base: '100%', md: sizeBlock }}
                h={{ base: '100%', md: sizeBlock }}
                style={{ position: 'relative' }}
              >
                <BottomFadeTrigger>
                  {row?.title && (
                    <Title order={1} rows={row.title} ta={isMobile ? 'center' : 'left'} mb="lg" />
                  )}

                  {row?.description && (
                    <Text
                      ta={isMobile ? 'center' : 'left'}
                      fz={16}
                      dangerouslySetInnerHTML={{ __html: row.description }}
                    />
                  )}
                </BottomFadeTrigger>

                {isDesktop && (
                  <GhostTrigger>
                    <CVLink>
                      <FunnyArrowIcon
                        size={70}
                        fz={25}
                        ff={poetsenOneRegular.style.fontFamily}
                        fw={400}
                        label="CV"
                        className={classes.arrow}
                      />
                    </CVLink>
                  </GhostTrigger>
                )}
              </Stack>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <RotateTrigger>
              <Flex h="100%" w="100%" justify={{ base: 'center', md: 'start' }}>
                {row?.picture && (
                  <Box
                    h={{ md: sizeBlock }}
                    w={{ md: sizeBlock }}
                    className={classes.imageContainer}
                  >
                    <CVLink>
                      <Box className={classes.imageOverlay}>
                        <span>{row.linkCv}</span>
                      </Box>
                      <Image
                        src={row.picture}
                        alt={row?.title?.join()}
                        style={{ borderRadius: 25 }}
                        layout={isMobile ? 'responsive' : 'none'}
                        width={sizeBlock}
                        height={sizeBlock}
                        className={classes.picture}
                      />
                    </CVLink>
                  </Box>
                )}
              </Flex>
            </RotateTrigger>
          </Grid.Col>
        </Grid>
      </RightFadeTrigger>
    </Section>
  );
};

export default Preface;
