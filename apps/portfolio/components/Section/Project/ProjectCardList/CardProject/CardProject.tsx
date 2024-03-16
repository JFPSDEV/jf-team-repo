import React from 'react';

import { Accordion, Box, Button, Group, Stack, Text } from '@jfteam/material';
import { IconCornerDownRight, IconWorldWww } from '@jfteam/icons';
import { IProjectRow } from '@/utils';
import Link from 'next/link';

interface CardProjectProps extends Omit<IProjectRow, 'picture'> {
  onClick?: () => void;
  currentIndex: number;
  webSiteLabel: string;
}

export const CardProject = (props: CardProjectProps) => {
  const { id, title, webSiteLabel, description, link, currentIndex, onClick } = props;

  return (
    <Accordion.Item
      value={id}
      onClick={onClick}
      style={(theme) => ({
        borderRadius: 8,
        boxShadow: currentIndex === +id ? theme.shadows.md : undefined,
        border: currentIndex === +id ? '1px solid #e7e7e7' : 'none',
      })}
      mb="md"
    >
      <Accordion.Control
        style={(theme) => ({
          fontFamily: theme.headings.fontFamily,
          fontWeight: theme.headings.fontWeight,
          ...theme.headings.sizes.h3,
        })}
      >
        {title}
      </Accordion.Control>
      <Accordion.Panel>
        <Stack justify="space-evenly" h={currentIndex === +id ? 200 : undefined}>
          <Text c="dimmed">{description}</Text>
          <Group align="center">
            <Box>
              <IconCornerDownRight />
            </Box>
            <Link href={link} target="_blank" style={{ textDecoration: 'none' }}>
              {webSiteLabel}
            </Link>
          </Group>
        </Stack>
      </Accordion.Panel>
    </Accordion.Item>
  );
};
