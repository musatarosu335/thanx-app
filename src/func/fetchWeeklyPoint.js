import firebase from 'firebase/app';
import moment from 'moment';

const fetchWeeklyPoint = () => {
  const db = firebase.firestore();
  const { currentUser } = firebase.auth();
  const receivedPointRef = db.collection(`users/${currentUser.uid}/point`);
  const today = new Date();
  today.setDate(today.getDate() - 1); // 要調整
  const lastWeek = new Date();
  lastWeek.setDate(lastWeek.getDate() - 8); // 要調整
  const receivedPointList = [];

  return (
    new Promise((resolve) => {
      receivedPointRef.where('sent_time', '>=', lastWeek).where('sent_time', '<', today) // 要調整
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const sentTime = doc.data().sent_time.seconds;
            const formattedSentTime = moment.unix(sentTime).format('MM-DD');
            const modData = {
              ...doc.data(),
              formattedSentTime,
            };
            receivedPointList.push(modData);
          });
          resolve(receivedPointList);
        })
        .catch((err) => {
          console.log(err); // eslint-disable-line no-console
          resolve(receivedPointList);
        });
    })
  );
};

export default fetchWeeklyPoint;
