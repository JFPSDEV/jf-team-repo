import React from 'react';

import { Accordion, Button, Stack, Text } from '@jfteam/material';
import { TProject } from '../../Project';
import { IconWorldWww } from '@jfteam/icons';

interface CardProjectProps extends Omit<TProject, 'picture'> {
  onClick?: () => void;
  currentIndex: number;
}

export const CardProject = (props: CardProjectProps) => {
  const { id, title, description, link, currentIndex, onClick } = props;

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
      bg="white"
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
          <Text>{description}</Text>
          <Button
            variant="subtle"
            component="a"
            href={link}
            target="_blank"
            style={{ objectFit: 'contain', width: 'fit-content' }}
          >
            <IconWorldWww />
            &nbsp; Voir le site
          </Button>
        </Stack>
      </Accordion.Panel>
    </Accordion.Item>
  );
};
