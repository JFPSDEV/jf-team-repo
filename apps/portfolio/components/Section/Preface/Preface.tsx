import React from 'react';

import Image from 'next/image';
import { FunnyArrowIcon } from '@jfteam/icons';
import { Grid, Box, Stack, Text, Title, useMantineTheme, rem, em } from '@jfteam/material';
import { useResponsive } from '@jfteam/hooks';

import { Section } from '../Section';
import { poppins } from '../../../utils';

import classes from './Preface.module.css';

export const Preface = () => {
  const { isMobile, isTablet } = useResponsive();

  return (
    <Section isDashed={!isMobile} pb={125}>
      <Grid>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Stack style={{ width: '100%', height: '100%' }} pl="md" justify="center">
            <Stack>
              <Title order={1}> FULL STACK DEVELOPPER</Title>

              <Text ff={poppins.style.fontFamily} fw={100} c="#707070" fz={21} lh="normal">
                Expert en développement frontend et backend pour des applications performantes et
                durables.
              </Text>
              {!isMobile && !isTablet && <FunnyArrowIcon size={70} />}
            </Stack>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Box pr={{ base: 0, sm: 'md' }}>
            <Image
              src="/jf_preface_2.png"
              alt="JF Picture"
              layout="responsive"
              style={{ borderRadius: 25 }}
              width={974}
              height={974}
            />
          </Box>
        </Grid.Col>
      </Grid>
    </Section>
  );
};
