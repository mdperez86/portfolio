import type { NextApiRequest, NextApiResponse } from 'next';

import { getData } from '../../../server/controllers/personalData';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') return getData(req, res);
  return res.status(404).json(new Error('Not Found'));
};
