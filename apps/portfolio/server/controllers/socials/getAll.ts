import type { NextApiRequest, NextApiResponse } from 'next';

import { getFirestore } from '../../services/getFirestore';

export const getAll = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const db = getFirestore();

  const snapshot = await db.collection('socials')
    .limit(5)
    .get();
  const socials = [];

  snapshot.forEach((doc) => {
    socials.push(doc.data());
  });

  return res.status(200).json(socials);
};
