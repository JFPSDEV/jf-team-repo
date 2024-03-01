import React from 'react';

import Image from 'next/image';
import { FunnyArrowIcon } from '@jfteam/icons';
import { Grid, Stack, Text, Flex } from '@jfteam/material';

import { Section } from '../Section';
import classes from './Preface.module.css';
import { Title } from '@/components/Title/Title';
import { type IPreface, type TSectionProps, poppins } from '@/utils';
import { FadeTrigger, RotationTrigger } from '@jfteam/animated';

const sizeBlock = 400;

interface PrefaceProps extends TSectionProps {
  row: IPreface;
}

export const Preface = ({ row, isMobile, isDesktop }: PrefaceProps) => {
  return (
    <Section py={0} className={classes.section} bg="transparent">
      <FadeTrigger direction="left" duration={1} startPosition={150}>
        <Grid gutter={{ base: 'lg', lg: 'var(--section-spacing)' }} className={classes.grid}>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <Stack w="100%" h="100%" align="end">
              <Stack
                justify="center"
                w={{ base: '100%', md: sizeBlock }}
                h={{ base: '100%', md: sizeBlock }}
              >
                <FadeTrigger direction="down">
                  {row?.title && (
                    <Title order={1} rows={row.title} ta={isMobile ? 'center' : 'left'} />
                  )}

                  {row?.description && (
                    <Text
                      ff={poppins.style.fontFamily}
                      ta={isMobile ? 'center' : 'left'}
                      fw={100}
                      c="#707070"
                      fz={21}
                      lh="normal"
                    >
                      {row.description}
                    </Text>
                  )}
                </FadeTrigger>
                {isDesktop && <FunnyArrowIcon size={70} />}
              </Stack>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <RotationTrigger>
              <Flex h="100%" w="100%" justify="start">
                {row?.picture && (
                  <Image
                    src={row.picture}
                    alt={row?.title?.join()}
                    style={{ borderRadius: 25 }}
                    layout={isMobile ? 'responsive' : 'none'}
                    width={sizeBlock}
                    height={sizeBlock}
                  />
                )}
              </Flex>
            </RotationTrigger>
          </Grid.Col>
        </Grid>
      </FadeTrigger>
    </Section>
  );
};
