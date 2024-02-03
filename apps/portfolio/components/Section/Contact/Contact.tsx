import React from 'react';

import { Section } from '../Section';
import { Stack, Title } from '@jfteam/material';
import { ContactForm } from './ContactForm/ContactForm';

export const Contact = () => {
  return (
    <Section isDashed={false} py={125} px="md">
      <Stack gap={30}>
        <Title order={2}>Contacter moi</Title>
        <ContactForm />
      </Stack>
    </Section>
  );
};
