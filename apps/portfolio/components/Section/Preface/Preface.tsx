import React from 'react';

import Image from 'next/image';
import { Grid, Box, Stack, Text } from '@jfteam/material';

import { Section } from '../Section';
import { poetsenOneRegular, montserrat, poppins } from '../../../utils';

import classes from './Preface.module.css';

export const Preface = () => {
  return (
    <Section isDashed={true}>
      <Grid>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Stack style={{ width: '100%', height: '100%' }} pl="md" justify="center">
            <Stack>
              <Text ff={poetsenOneRegular.style.fontFamily} fw={400} c="black" fz={70} lh="normal">
                FULL STACK DEVELOPPER
              </Text>

              <Text ff={poppins.style.fontFamily} fw={100} c="#707070" fz={18} lh="normal">
                Expert en développement frontend et backend pour des applications performantes et
                durables.
              </Text>
            </Stack>
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Box pr="md">
            <Image
              src="/jf_preface_2.png"
              alt="Description de l'image"
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
