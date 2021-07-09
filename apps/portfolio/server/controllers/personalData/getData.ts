import type { NextApiRequest, NextApiResponse } from 'next';

import { getFirestore } from '../../services/getFirestore';

export const getData = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const db = getFirestore();

  const doc = await db.collection('personal')
    .doc('data')
    .get();

  if (!doc.exists) {
    return res.status(404).json(new Error('Document data was not found'));
  }

  const data = doc.data();

  return res.status(200).json({
    ...data,
    birthday: data.birthday.toDate(),
  });
};
