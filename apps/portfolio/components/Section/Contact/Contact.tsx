import React from 'react';

import { Stack } from '@jfteam/material';
import { ETrigger, FadeTrigger } from '@jfteam/animated';

import { useLocale } from '@/hooks';
import { Section } from '../Section';
import { Title } from '@/components/Title/Title';
import { ContactForm } from './ContactForm/ContactForm';
import { ENavlink, IContact, type TSectionProps, headerLink } from '@/utils';

interface ContactProps extends TSectionProps {
  row: IContact;
}

const Contact = ({ row }: ContactProps) => {
  const { locale } = useLocale();

  const anchor = headerLink.navlink[ENavlink.CONTACT][locale].anchor;

  return (
    <Section id={anchor}>
      <Stack gap={30}>
        <FadeTrigger trigger={ETrigger.ScrollTrigger}>
          <Title order={2} ta="center" rows={row.title} />
        </FadeTrigger>
        {row.fields && <ContactForm row={row.fields} />}
      </Stack>
    </Section>
  );
};

export default Contact;
