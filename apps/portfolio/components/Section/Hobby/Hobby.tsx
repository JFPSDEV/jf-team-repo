import React from 'react';

import { Box, Card, Flex, Grid, List, Text, ThemeIcon } from '@jfteam/material';

import { Section } from '../Section';
import classes from './Hobby.module.css';
import { IconStyle } from '@jfteam/icons';
import Image from 'next/image';

import { useResponsive } from '@jfteam/hooks';
import { IHobby } from '@/utils';
import { Title } from '@/components/Title/Title';

interface HobbyProps {
  row: IHobby;
}

export const Hobby = ({ row }: HobbyProps) => {
  const { isMobile } = useResponsive();

  const imageGrid = (
    <Grid.Col span={{ base: 12, md: 8 }}>
      <Box h={500} w="100%" style={{ position: 'relative' }}>
        <Image
          src={`/images/hobby-${isMobile ? 'mobile' : 'desktop'}.png`}
          alt="hobby"
          layout="fill"
          objectFit="cover"
        />
      </Box>
    </Grid.Col>
  );
  return (
    <Section py={80}>
      <Title order={2} ta="center" pb={50} rows={row.title} />

      <Card p={0} m={0} shadow="sm" radius="md" withBorder>
        <Grid className={classes.gridContainer}>
          {isMobile && imageGrid}
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Flex h="100%" w="100%" align="center" p="md">
              <List spacing="xl" size="sm" center>
                {row.rows.map(({ id, text, icon }) => (
                  <List.Item
                    key={id}
                    icon={
                      <ThemeIcon color="#D18852" size={32} radius="xl">
                        <IconStyle value={icon} size={20} />
                      </ThemeIcon>
                    }
                  >
                    <Text>{text}</Text>
                  </List.Item>
                ))}
              </List>
            </Flex>
          </Grid.Col>
          {!isMobile && imageGrid}
        </Grid>
      </Card>
    </Section>
  );
};
