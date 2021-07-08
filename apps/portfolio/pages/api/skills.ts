import type { NextApiRequest, NextApiResponse } from 'next';
import admin from 'firebase-admin';

const serviceAccount = JSON.parse(process.env.FIRESTORE_SERVICE_ACCOUNT);
const credential = admin.credential.cert(serviceAccount);

export default async (
  req: NextApiRequest,
  res: NextApiResponse<any[]>
) => {
  if (!admin.apps.length) {
    admin.initializeApp({ credential });
  }
  const db = admin.firestore();

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
