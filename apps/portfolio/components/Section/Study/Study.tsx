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
import { useResponsive } from '@jfteam/hooks';
import { IconPdf, IconStyle } from '@jfteam/icons';

import { IStudy } from '@/utils';
import { Section } from '../Section';
import { CVTimeline } from '@/components/CVTimeline/CVTimeline';
import { Title as MultiLineTitle } from '@/components/Title/Title';

interface StudyProps {
  row: IStudy;
}

export const Study = ({ row }: StudyProps) => {
  const { isMobile } = useResponsive();

  const { colorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });

  const darkProps = {
    borderWidth: 1,
    borderColor: 'var(--mantine-color-gray-3)',
  };

  return (
    <Section py={80} variant="secondary">
      <MultiLineTitle order={2} ta="center" pb={50} rows={row.title} />
      <CVTimeline active={row.rows.length}>
        {row.rows.map(({ id, title: studyTitle, description, date, link, icon }) => (
          <CVTimeline.Item bullet={<IconStyle value={icon} size={CVTimeline.iconSize} />} key={id}>
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
          </CVTimeline.Item>
        ))}
      </CVTimeline>
    </Section>
  );
};
