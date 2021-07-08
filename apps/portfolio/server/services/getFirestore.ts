import { getFirebaseAdmin } from './getFirebaseAdmin';

export const getFirestore = () => {
  return getFirebaseAdmin().firestore();
};
