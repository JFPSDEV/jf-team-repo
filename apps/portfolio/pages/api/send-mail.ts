import type { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '500kb',
    },
  },
};

export default async function sendMail(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      res.status(200).json({
        mail: true,
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
