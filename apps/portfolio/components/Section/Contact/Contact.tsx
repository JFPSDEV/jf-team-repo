import React from 'react';

import { Section } from '../Section';
import { Stack, Title } from '@jfteam/material';
import { ContactForm } from './ContactForm/ContactForm';

const title = 'Contacter moi';

export const Contact = () => {
  return (
    <Section isDashed={false} py={80} px="md" id="contact">
      <Stack gap={30}>
        <Title order={2} ta="center">
          {title.toUpperCase()}
        </Title>
        <ContactForm />
      </Stack>
    </Section>
  );
};
