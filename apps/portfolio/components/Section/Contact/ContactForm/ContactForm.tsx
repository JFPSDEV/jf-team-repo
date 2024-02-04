import React, { FormEventHandler } from 'react';

import { useForm } from '@jfteam/form';
import { TEmailForm } from '@jfteam/types';
import { useLazyFetch } from '@jfteam/hooks';
import { Button, Stack, TextInput, Textarea, toast } from '@jfteam/material';

import { root } from '../../../../utils';
import { ContactDrop, TFiles } from './ContactDrop/ContactDrop';
import { Mail } from '@jfteam/mail';

type TMail = TEmailForm<Mail.Attachment>;

interface ContactFormProps {}

export const ContactForm = (props: ContactFormProps) => {
  const {} = props;

  const [sendMail, { loading }] = useLazyFetch<TMail, Object>(root.sendMail, 'POST');

  const form = useForm<TMail>({
    initialValues: {
      email: 'jfps.dev21@gmail.com',
      subject: 'Subject TEST',
      message: 'YOUP youpla',
      attachments: [],
    },

    validate: {
      email: (emailValue) => (/^\S+@\S+$/.test(emailValue) ? null : 'Invalid email'),
      message: (messageValue) =>
        messageValue.length < 1 ? 'First name must have a content' : null,
    },
  });

  const handleSendEMail = () => {
    if (form.isValid()) {
      toast.promise(
        sendMail(form.values).then((res) => {
          form.reset();
        }),
        {
          loading: 'Sending...',
          success: <b>The mail has been sent!</b>,
          error: <b>An error occurred while sending the email, please try again.</b>,
        }
      );
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    handleSendEMail();
  };

  const handleAttachmentChange = (files: TFiles[]) => {
    form.setFieldValue(
      'attachments',
      files.map((file) => ({
        filename: file.name,
        path: file.base64,
        encoding: 'base64',
        contentType: file.type,
      }))
    );
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
        <ContactDrop onChange={handleAttachmentChange} />
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
