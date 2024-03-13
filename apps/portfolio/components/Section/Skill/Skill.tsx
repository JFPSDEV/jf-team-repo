import React from 'react';

import { IconStyle } from '@jfteam/icons';
import { Card, Grid, Group, Stack, Text, Title } from '@jfteam/material';

import { Section } from '../Section';
import { EVartiant, ISkill, type TSectionProps } from '@/utils';
import { Title as MultiLineTitle } from '@/components/Title/Title';
import { ETrigger, FadeTrigger } from '@jfteam/animated';

interface SkillProps extends TSectionProps {
  row: ISkill;
}

const Skill = ({ row }: SkillProps) => {
  return (
    <Section variant={EVartiant.SECONDARY}>
      <FadeTrigger trigger={ETrigger.ScrollTrigger}>
        <MultiLineTitle order={2} ta="center" pb={50} rows={row.title} />
      </FadeTrigger>

      <Grid>
        {row.rows.map(({ id, title, text, icon }) => (
          <Grid.Col key={id} span={{ base: 12, sm: 6, md: 4 }}>
            <FadeTrigger trigger={ETrigger.ScrollTrigger} style={{ height: '100%' }}>
              <Card shadow="sm" padding="md" radius="md" h="100%">
                <Stack h="100%">
                  <Title order={3}>{title}</Title>
                  <Text c="dimmed">{text}</Text>
                  <Group p={0} m={0} style={{ flex: 1 }} align="end" justify="end">
                    <IconStyle value={icon} />
                  </Group>
                </Stack>
              </Card>
            </FadeTrigger>
          </Grid.Col>
        ))}
      </Grid>
    </Section>
  );
};

export default Skill;
