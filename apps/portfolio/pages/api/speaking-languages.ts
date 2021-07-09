import type { NextApiRequest, NextApiResponse } from 'next';

import { getAll } from '../../server/controllers/speakingLanguages';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') return getAll(req, res);
  return res.status(404).json(new Error('Not Found'));
};
