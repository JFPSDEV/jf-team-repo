import React, { FormEventHandler } from 'react';

import { Box, Button, Stack, TextInput, Textarea, toast } from '@jfteam/material';
import { ContactDrop } from './ContactDrop/ContactDrop';
import { useForm } from '@jfteam/form';
import { TEmailForm } from '@jfteam/types';
import { fetcher } from '@jfteam/utils';
import { useLazyFetch } from '@jfteam/hooks';
import { root } from '../../../../utils';

interface ContactFormProps {}

export const ContactForm = (props: ContactFormProps) => {
  const {} = props;

  const [sendMail, { loading }] = useLazyFetch<TEmailForm, Object>(root.sendMail, 'POST');

  const form = useForm<TEmailForm>({
    initialValues: {
      email: 'test@test.com',
      subject: 'test',
      message: 'test',
    },

    validate: {
      email: (emailValue) => (/^\S+@\S+$/.test(emailValue) ? null : 'Invalid email'),
      message: (messageValue) =>
        messageValue.length < 1 ? 'First name must have a content' : null,
    },
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (form.isValid()) {
      toast.promise(
        sendMail().then(() => form.reset()),
        {
          loading: 'Sending...',
          success: <b>The mail has been sent!</b>,
          error: <b>An error occurred while sending the email, please try again.</b>,
        }
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack px="xl">
        <TextInput
          disabled={loading}
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />
        <TextInput
          disabled={loading}
          withAsterisk
          label="Subject"
          placeholder="subject..."
          {...form.getInputProps('subject')}
        />
        <ContactDrop />
        <Textarea
          withAsterisk
          disabled={loading}
          label="Message"
          placeholder="Message..."
          styles={{ input: { height: 250 } }}
          {...form.getInputProps('message')}
        />
        <Button type="submit" loading={loading}>
          Send me
        </Button>
      </Stack>
    </form>
  );
};
