import type { NextApiRequest, NextApiResponse } from 'next';

import { getFirestore } from '../../services/getFirestore';

export const getAll = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const db = getFirestore();

  const snapshot = await db.collection('skills')
    .orderBy('avg', 'desc')
    .limit(5)
    .get();
  const skills = [];

  snapshot.forEach((doc) => {
    skills.push(doc.data());
  });

  return res.status(200).json(skills);
};
