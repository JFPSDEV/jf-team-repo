import React from 'react';

import { useForm } from '@jfteam/form';
import { TEmailForm } from '@jfteam/types';
import { useLazyFetch } from '@jfteam/hooks';
import { Button, Stack, TextInput, Textarea, toast } from '@jfteam/material';

import { IContactForm, routesApi } from '@/utils';
import { ContactDrop, TFiles } from './ContactDrop/ContactDrop';
import { Mail } from '@jfteam/mail';
import { ETrigger, FadeTrigger } from '@jfteam/animated';

type TMail = TEmailForm<TFiles>;

interface ContactFormProps {
  row: IContactForm;
  loading?: boolean;
  isMobile?: boolean;
}

export const ContactForm = ({ row }: ContactFormProps) => {
  const [sendMail, { loading }] = useLazyFetch<TMail, Object>(routesApi.sendMail, 'POST');

  const form = useForm<TMail>({
    initialValues: {
      email: '',
      subject: '',
      message: '',
      attachments: [],
    },

    validate: {
      email: (emailValue) => (/^\S+@\S+$/.test(emailValue) ? null : row.email.error),
      message: (messageValue) => (messageValue.length < 1 ? row.message.error : null),
      subject: (messageValue) => (messageValue.length < 1 ? row.subject.error : null),
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
          .then(() => form.reset())
          .catch(console.error),
        {
          loading: row.toast.loading,
          success: <b>{row.toast.success}</b>,
          error: <b>{row.toast.error}</b>,
        }
      );
    }
  };

  return (
    <form
      onSubmit={form.onSubmit((values, event) => handleSendEMail(values, event))}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Stack w={{ base: '100%', md: 900 }}>
        <FadeTrigger trigger={ETrigger.ScrollTrigger}>
          <TextInput
            disabled={loading}
            withAsterisk
            label={row.email.label}
            placeholder={row.email.placeholder}
            {...form.getInputProps('email')}
          />
        </FadeTrigger>
        <FadeTrigger trigger={ETrigger.ScrollTrigger}>
          <TextInput
            disabled={loading}
            withAsterisk
            label={row.subject.label}
            placeholder={row.subject.placeholder}
            {...form.getInputProps('subject')}
          />
        </FadeTrigger>
        <FadeTrigger trigger={ETrigger.ScrollTrigger}>
          {' '}
          <ContactDrop disabled={loading} {...form.getInputProps('attachments')} />
        </FadeTrigger>
        <FadeTrigger
          trigger={ETrigger.ScrollTrigger}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <Textarea
            w="100%"
            withAsterisk
            disabled={loading}
            label={row.message.label}
            placeholder={row.message.placeholder}
            styles={{ input: { height: 250 } }}
            {...form.getInputProps('message')}
          />

          <Button type="submit" loading={loading} w={{ base: '100%', md: 200 }} mt="md">
            {row.button.label}
          </Button>
        </FadeTrigger>
      </Stack>
    </form>
  );
};
