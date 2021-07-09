import type { NextApiRequest, NextApiResponse } from 'next';

import { getFirestore } from '../../services/getFirestore';

export const getAll = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const db = getFirestore();

  const snapshot = await db.collection('speakingLanguages')
    .orderBy('value', 'desc')
    .limit(3)
    .get();
  const speakingLanguages = [];

  snapshot.forEach((doc) => {
    speakingLanguages.push(doc.data());
  });

  return res.status(200).json(speakingLanguages);
};
