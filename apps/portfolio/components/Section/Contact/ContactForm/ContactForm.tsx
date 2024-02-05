import React from 'react';

import { useForm } from '@jfteam/form';
import { TEmailForm } from '@jfteam/types';
import { useLazyFetch } from '@jfteam/hooks';
import { Button, Stack, TextInput, Textarea, toast } from '@jfteam/material';

import { root } from '../../../../utils';
import { ContactDrop, TFiles } from './ContactDrop/ContactDrop';
import { Mail } from '@jfteam/mail';

type TMail = TEmailForm<TFiles>;

interface ContactFormProps {}

export const ContactForm = (props: ContactFormProps) => {
  const {} = props;

  const [sendMail, { loading }] = useLazyFetch<TMail, Object>(root.sendMail, 'POST');

  const form = useForm<TMail>({
    initialValues: {
      email: '',
      subject: '',
      message: '',
      attachments: [],
    },

    validate: {
      email: (emailValue) => (/^\S+@\S+$/.test(emailValue) ? null : 'Invalid email'),
      message: (messageValue) =>
        messageValue.length < 1 ? 'First name must have a content' : null,
      subject: (messageValue) => (messageValue.length < 1 ? 'Subject must have a content' : null),
    },
  });

  const handleSendEMail = (values: TMail, event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (form.isValid()) {
      const formatAttachments: Mail.Attachment[] = form.values.attachments.map((file, index) => ({
        filename: `${index + 1}-${file.name}`,
        path: file.base64,
      }));

      toast.promise(
        sendMail({
          ...values,
          attachments: formatAttachments,
        })
          .then((res) => {
            form.reset();
          })
          .catch((err) => {
            console.log(err);
            alert('stop');
          }),
        {
          loading: 'Sending...',
          success: <b>The mail has been sent!</b>,
          error: <b>An error occurred while sending the email, please try again.</b>,
        }
      );
    }
  };

  return (
    <form onSubmit={form.onSubmit((values, event) => handleSendEMail(values, event))}>
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
        <ContactDrop disabled={loading} {...form.getInputProps('attachments')} />
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
