import React from 'react';

import Image from 'next/image';
import { FunnyArrowIcon } from '@jfteam/icons';
import { Grid, Stack, Text, Flex } from '@jfteam/material';

import { Section } from '../Section';
import classes from './Preface.module.css';
import { Title } from '@/components/Title/Title';
import { type IPreface, type TSectionProps, poppins } from '@/utils';
import { RightFadeTrigger, RotateTrigger, BottomFadeTrigger } from '@jfteam/animated';

const sizeBlock = 400;

interface PrefaceProps extends TSectionProps {
  row: IPreface;
}

const Preface = ({ row, isMobile, isDesktop }: PrefaceProps) => {
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
              >
                <BottomFadeTrigger>
                  {row?.title && (
                    <Title order={1} rows={row.title} ta={isMobile ? 'center' : 'left'} mb="lg" />
                  )}

                  {row?.description && (
                    <Text
                      ff={poppins.style.fontFamily}
                      ta={isMobile ? 'center' : 'left'}
                      fw={100}
                      fz={16}
                      lh="normal"
                    >
                      {row.description}
                    </Text>
                  )}
                </BottomFadeTrigger>
                {isDesktop && <FunnyArrowIcon size={70} className={classes.arrow} />}
              </Stack>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <RotateTrigger>
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
            </RotateTrigger>
          </Grid.Col>
        </Grid>
      </RightFadeTrigger>
    </Section>
  );
};

export default Preface;
