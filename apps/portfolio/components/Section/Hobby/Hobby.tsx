import React from 'react';

import { Box, Card, Flex, Grid, List, Text, ThemeIcon, Title, rem } from '@jfteam/material';

import { Section } from '../Section';
import classes from './Hobby.module.css';
import {
  IconBrandYoutubeKids,
  IconCircleCheck,
  IconCircleDashed,
  IconMap2,
  IconPencil,
  IconYoga,
} from '@jfteam/icons';
import Image from 'next/image';
import { generateUUID } from '@jfteam/utils';

const title = 'Hobbies';

const list = [
  {
    id: generateUUID(),
    text: 'Apprentissage du dessin Manga',
    Icon: IconPencil,
  },
  { id: generateUUID(), text: 'Montage Vidéo', Icon: IconBrandYoutubeKids },
  { id: generateUUID(), text: `Découverte d'activités sportives variées`, Icon: IconYoga },
  { id: generateUUID(), text: `Randonnées, voyages`, Icon: IconMap2 },
];

interface HobbyProps {}

export const Hobby = (props: HobbyProps) => {
  return (
    <Section isDashed={false} py={80}>
      <Title order={2} ta="center" pb={50}>
        {title.toUpperCase()}
      </Title>
      <Card p={0} m={0} shadow="sm" radius="md" withBorder>
        <Grid className={classes.gridContainer}>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Flex h="100%" w="100%" align="center" p="md">
              <List spacing="xl" size="sm" center>
                {list.map(({ id, text, Icon }) => (
                  <List.Item
                    key={id}
                    icon={
                      <ThemeIcon color="#D18852" pnpmsize={32} radius="xl">
                        <Icon size={20} />
                      </ThemeIcon>
                    }
                  >
                    <Text>{text}</Text>
                  </List.Item>
                ))}
              </List>
            </Flex>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Box h={500} w="100%">
              <Image
                src="/images/hobby-desktop.png"
                alt="hobby"
                layout="responsive"
                width={710}
                height={515}
              />
            </Box>
          </Grid.Col>
        </Grid>
      </Card>
    </Section>
  );
};
