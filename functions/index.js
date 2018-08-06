const functions = require('firebase-functions'); // Firebase Functions SDK(HTTPリクエストをトリガするために使用)
const admin = require('firebase-admin'); // Firebase Admin SDK(Firestoreの処理及び認証をするために使用)

admin.initializeApp(functions.config().firebase);

/* ==================================
Authentication
================================== */
// ユーザー登録後、Firestoreに登録
exports.registerUsers = functions.auth.user().onCreate((user) => {
  const { uid } = user;

  return admin.auth().getUser(uid).then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log(userRecord.toJSON()); // eslint-disable-line no-console
    const fullName = userRecord.displayName || 'Anonymous';
    console.log(fullName);
    /*
    return admin.database().ref('messages').push({
      name: 'Firebase Bot',
      text: `${fullName} signed in for the first time! Welcome!`
    });
    */
  }).catch((error) => {
    console.log(error); // eslint-disable-line no-console
  });
});
