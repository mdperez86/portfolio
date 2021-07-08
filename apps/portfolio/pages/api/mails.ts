import type { NextApiRequest, NextApiResponse } from 'next';

import { post } from '../../server/controllers/mails';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') return post(req, res);
  return res.status(404).json(new Error('Not Found'));
};
