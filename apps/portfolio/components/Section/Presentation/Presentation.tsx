import React, { ReactNode } from 'react';

import Image from 'next/image';

import { IconStyle } from '@jfteam/icons';
import { Box, HTimeline, Text, Title, Stack, List, ThemeIcon, Tooltip } from '@jfteam/material';

import { Section } from '../Section';
import classes from './Presentation.module.css';
import { ELocale, IPresentation, headerLink, type TSectionProps, ENavlink } from '@/utils';
import { CVTimeline } from '@/components';
import { Title as MultiLineTitle } from '@/components/Title/Title';
import {
  LeftFadeTrigger,
  RotateTrigger,
  TopFadeTrigger,
  BottomFadeTrigger,
} from '@jfteam/animated';
import Link from 'next/link';
import { useLocale } from '@/hooks';

const lineWidth = '25%';
const baseWidth = 270;

interface PresentationProps extends TSectionProps {
  row: IPresentation;
}

const Presentation = ({ row, isMobile }: PresentationProps) => {
  const { locale: linkLocale } = useLocale();
  const locale: ELocale = linkLocale || ELocale.FR;

  const anchor = headerLink.navlink[ENavlink.CONTACT][locale].anchor;

  const image = (
    <Image
      src={row.picture}
      alt={row.title.join()}
      fill
      style={{ objectFit: 'cover' }}
      className={classes.mainPicture}
    />
  );

  const title = (
    <TopFadeTrigger className={classes.titleContainer}>
      <MultiLineTitle order={1} rows={row.title} w="100%" ta="center" />
    </TopFadeTrigger>
  );

  const PhoneContainer = ({ children }: { children: ReactNode }) => (
    <Tooltip label={row.phone.label}>
      <a href={`tel:+${row.phone.value}`} className={classes.phoneContainer}>
        {children}
      </a>
    </Tooltip>
  );

  const MailContainer = ({ children }: { children: ReactNode }) => (
    <Tooltip label={row.mail.label}>
      <Link href={`/${locale}#${anchor}`} className={classes.phoneContainer}>
        {children}
      </Link>
    </Tooltip>
  );

  return (
    <>
      {!isMobile && row?.title && title}
      <Section px="xl" pb="var(--section-spacing)" pt={{ xs: 0, md: 60 }}>
        {isMobile && title}
        {!isMobile && (
          <LeftFadeTrigger style={{ position: 'relative', height: 440 }}>
            <HTimeline>
              <HTimeline.Item
                bulletSize={265}
                lineHeight={5}
                lineWidth={lineWidth}
                color="var(--orange-main)"
              />

              <HTimeline.Item
                container={MailContainer}
                bulletSize={CVTimeline.bulletSize}
                lineHeight={5}
                lineWidth={lineWidth}
                color="var(--orange-main)"
                icon={<IconStyle value={row.mail.icon} />}
              >
                <Title order={3} className={classes.hTimelineTitle}>
                  {row.mail.value}
                </Title>
              </HTimeline.Item>

              <HTimeline.Item
                container={PhoneContainer}
                bulletSize={CVTimeline.bulletSize}
                lineHeight={5}
                lineWidth={0}
                color="var(--orange-main)"
                icon={<IconStyle value={row.phone.icon} />}
              >
                <Title order={3} className={classes.hTimelineTitle}>
                  {row.phone.value}
                </Title>
              </HTimeline.Item>

              <CVTimeline
                active={1}
                align="left"
                pl={baseWidth / 2}
                style={{ position: 'absolute', bottom: 90 }}
                pr="xl"
                h={150}
              >
                <CVTimeline.Item>
                  <Box h={100} />
                </CVTimeline.Item>

                <CVTimeline.Item bullet={<IconStyle value="ti ti-mood-smile-beam" />}>
                  <BottomFadeTrigger>
                    {row?.description && (
                      <Text
                        style={{ transformOrigin: 'center', transform: 'translateY(-30%)' }}
                        dangerouslySetInnerHTML={{ __html: row.description }}
                      />
                    )}
                  </BottomFadeTrigger>
                </CVTimeline.Item>
              </CVTimeline>
              <Box style={{ position: 'absolute', top: 0, bottom: 0 }}>
                <RotateTrigger
                  style={{ width: baseWidth, height: baseWidth, position: 'relative', zIndex: 2 }}
                >
                  {image}
                </RotateTrigger>
              </Box>
            </HTimeline>
          </LeftFadeTrigger>
        )}
        {isMobile && (
          <Stack align="center" gap="xl">
            <Box h={baseWidth} w={baseWidth} style={{ position: 'relative' }}>
              {image}
            </Box>

            <Text ta="center" dangerouslySetInnerHTML={{ __html: row.description }} />

            <List spacing="xl" size="sm" center>
              <List.Item
                icon={
                  <ThemeIcon color="var(--orange-main)" size={32} radius="xl">
                    <IconStyle value={row.mail.icon} size={20} />
                  </ThemeIcon>
                }
              >
                <Text>{row.mail.value}</Text>
              </List.Item>
              <List.Item
                icon={
                  <PhoneContainer>
                    <ThemeIcon color="var(--orange-main)" size={32} radius="xl">
                      <IconStyle value={row.phone.icon} size={20} />
                    </ThemeIcon>
                  </PhoneContainer>
                }
              >
                <PhoneContainer>
                  <Text>{row.phone.value}</Text>
                </PhoneContainer>
              </List.Item>
            </List>
          </Stack>
        )}
      </Section>
    </>
  );
};

export default Presentation;
