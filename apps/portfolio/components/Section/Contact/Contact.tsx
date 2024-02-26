import React from 'react';

import { Section } from '../Section';
import { Stack } from '@jfteam/material';
import { ContactForm } from './ContactForm/ContactForm';
import { ENavlink, IContact, headerLink } from '@/utils';
import { useLocale } from '@/hooks';
import { Title } from '@/components/Title/Title';

interface ContactProps {
  row: IContact;
}

export const Contact = ({ row }: ContactProps) => {
  const locale = useLocale();

  const anchor = headerLink.navlink[ENavlink.CONTACT][locale].anchor;

  return (
    <Section py={80} px="md" id={anchor}>
      <Stack gap={30}>
        <Title order={2} ta="center" rows={row.title} />
        {row.fields && <ContactForm row={row.fields} />}
      </Stack>
    </Section>
  );
};
