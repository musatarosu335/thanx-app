const functions = require('firebase-functions'); // Firebase Functions SDK(HTTPリクエストをトリガするために使用)
const admin = require('firebase-admin'); // Firebase Admin SDK(Firestoreの処理及び認証をするために使用)

admin.initializeApp(functions.config().firebase);

/* ==================================
Authentication
================================== */
// ユーザー登録後、Firestoreに登録
exports.registerUsers = functions.auth.user().onCreate((user) => {
  const { uid } = user;
  const db = admin.firestore();

  return admin.auth().getUser(uid).then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log(userRecord.toJSON()); // eslint-disable-line no-console
    const { email } = userRecord;
    const displayName = userRecord.displayName || 'Anonymous';
    const photoURL = userRecord.photoURL || '/assets/images/default_profile.svg';

    return db.collection('users').doc(uid).set({
      user_name: displayName,
      photo_url: photoURL,
      email,
      partner: '',
      point: 0,
      create_on: new Date(),
    })
      .then(() => {
        console.log('Success write user info'); // eslint-disable-line no-console
      })
      .catch((err) => {
        console.log(err); // eslint-disable-line no-console
      });
  }).catch((error) => {
    console.log(error); // eslint-disable-line no-console
  });
});
