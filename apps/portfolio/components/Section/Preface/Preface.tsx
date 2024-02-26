import React from 'react';

import Image from 'next/image';
import { FunnyArrowIcon } from '@jfteam/icons';
import { Grid, Box, Stack, Text } from '@jfteam/material';
import { useResponsive } from '@jfteam/hooks';

import { Section } from '../Section';
import { type IPreface, poppins } from '@/utils';

import classes from './Preface.module.css';
import { Title } from '@/components/Title/Title';

interface PrefaceProps {
  row: IPreface;
}

export const Preface = ({ row }: PrefaceProps) => {
  const { isMobile, isDesktop } = useResponsive();

  return (
    <Section pb={0} className={classes.section} bg="transparent">
      <Grid>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Stack style={{ width: '100%', height: '100%' }} justify="center">
            <Stack pl={{ base: 0, md: 'md' }}>
              {row?.title && <Title order={1} rows={row.title} ta={isMobile ? 'center' : 'left'} />}

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
              {isDesktop && <FunnyArrowIcon size={70} />}
            </Stack>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Box pr={{ base: 0, sm: 'md' }}>
            {row?.picture && (
              <Image
                src={row.picture}
                alt={row?.title?.join()}
                style={{ borderRadius: 25 }}
                layout={isMobile ? 'responsive' : 'none'}
                width={400}
                height={400}
              />
            )}
          </Box>
        </Grid.Col>
      </Grid>
    </Section>
  );
};
