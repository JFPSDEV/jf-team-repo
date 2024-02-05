import type { NextApiRequest, NextApiResponse } from 'next';

import { Mail, sendMail } from '@jfteam/mail';
import { TEmailForm } from '@jfteam/types';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '20000kb',
    },
  },
};

const emailPortfolio = process.env?.EMAIL_PORTFOLIO || '';
const emailPassword = process.env?.EMAIL_PASSWORD || '';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, subject, message, attachments }: TEmailForm<Mail.Attachment> = req.body;

    if (
      !email ||
      !subject ||
      !message ||
      typeof email !== 'string' ||
      typeof subject !== 'string' ||
      typeof message !== 'string'
    ) {
      res.status(500).json({
        error: 'Missing data',
      });
    }

    try {
      const result = await sendMail(
        { user: emailPortfolio, pass: emailPassword },
        { email, subject, message, attachments }
      );

      res.status(200).json({
        result,
      });
    } catch (error) {
      res.status(500).json({
        error: "Une erreur s'est produite",
      });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
