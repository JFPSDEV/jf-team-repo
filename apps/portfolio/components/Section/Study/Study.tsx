import React from 'react';

import {
  ActionIcon,
  Flex,
  Stack,
  Text,
  Title,
  Tooltip,
  useMantineColorScheme,
} from '@jfteam/material';
import { IconPdf, IconStyle } from '@jfteam/icons';

import { Section } from '../Section';
import { EVartiant, IStudy, type TSectionProps } from '@/utils';
import { CVTimeline } from '@/components';
import { Title as MultiLineTitle } from '@/components/Title/Title';
import { ETrigger, FadeTrigger, RotationTrigger } from '@jfteam/animated';

interface StudyProps extends TSectionProps {
  row: IStudy;
}

export const Study = ({ row, isMobile }: StudyProps) => {
  const { colorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  const darkProps = {
    borderWidth: 1,
    borderColor: 'var(--mantine-color-gray-3)',
  };

  return (
    <Section py={80} variant={EVartiant.SECONDARY}>
      <FadeTrigger trigger={ETrigger.ScrollTrigger}>
        <MultiLineTitle order={2} ta="center" pb={50} rows={row.title} />
      </FadeTrigger>
      <CVTimeline active={row.rows.length}>
        {row.rows.map(({ id, title: studyTitle, description, date, link, icon }) => (
          <CVTimeline.Item bullet={<IconStyle value={icon} size={CVTimeline.iconSize} />} key={id}>
            <FadeTrigger trigger={ETrigger.ScrollTrigger} direction="left" duration={1}>
              <CVTimeline.Card direction="Right" {...(colorScheme === 'dark' && darkProps)}>
                <Flex align={isMobile ? 'end' : 'center'}>
                  <Stack gap="sm" style={{ flex: 1 }}>
                    <Title order={3}>{studyTitle}</Title>
                    <Text c="dimmed" size="sm">
                      {description}
                    </Text>
                    <Text size="xs">
                      <b>{date}</b>
                    </Text>
                  </Stack>
                  <Tooltip label={studyTitle}>
                    <ActionIcon
                      w={50}
                      h={50}
                      variant="outline"
                      component="a"
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconPdf size={CVTimeline.iconSize} />
                    </ActionIcon>
                  </Tooltip>
                </Flex>
              </CVTimeline.Card>
            </FadeTrigger>
          </CVTimeline.Item>
        ))}
      </CVTimeline>
    </Section>
  );
};
