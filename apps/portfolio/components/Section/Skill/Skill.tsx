import React from 'react';
import { Section } from '../Section';
import { Card, Grid, Group, Stack, Text, Title } from '@jfteam/material';
import { generateUUID } from '@jfteam/utils';
import { IconStyle } from '@jfteam/icons';
import { ISkill } from '@/utils';
import { Title as MultiLineTitle } from '@/components/Title/Title';

interface SkillProps {
  row: ISkill;
}

export const Skill = ({ row }: SkillProps) => {
  return (
    <Section py={80} variant="secondary">
      <MultiLineTitle order={2} ta="center" pb={50} rows={row.title} />

      <Grid>
        {row.rows.map(({ id, title, text, icon }) => (
          <Grid.Col key={id} span={{ base: 12, sm: 6, md: 4 }}>
            <Card shadow="sm" padding="md" radius="md" h="100%">
              <Stack h="100%">
                <Title order={3}>{title}</Title>
                <Text>{text}</Text>
                <Group p={0} m={0} style={{ flex: 1 }} align="end" justify="end">
                  <IconStyle value={icon} />
                </Group>
              </Stack>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Section>
  );
};
