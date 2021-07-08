import admin from 'firebase-admin';

export const getFirebaseAdmin = () => {
  const serviceAccount = JSON.parse(process.env.FIRESTORE_SERVICE_ACCOUNT);
  const credential = admin.credential.cert(serviceAccount);
  
  if (!admin.apps.length) {
    admin.initializeApp({ credential });
  }

  return admin;
};
