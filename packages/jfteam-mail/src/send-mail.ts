import { nodemailer, type Mail } from '.';
import type { TEmailForm, authEmail } from '@jfteam/types';

export const sendMail = async (
  { user, pass }: authEmail,
  { email, subject, message, attachments }: TEmailForm<Mail.Attachment>
) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass }
  });

  try {
    return await transporter
      .sendMail({
        from: email,
        to: user,
        subject,
        text: message,
        attachments,
        html: `<p>${message}</p>`
      })
      .then(() => {
        return { success: true };
      });
  } catch (err) {
    console.log(err);
    return { message: JSON.stringify(err) };
  }
};
