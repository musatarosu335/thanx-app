import firebase from 'firebase/app';

/*
Action Creator
*/
const setUserInfo = userInfo => ({
  type: 'SET_USER_INFO',
  payload: {
    userInfo,
  },
});

const setPartnerInfo = partnerInfo => ({
  type: 'SET_PARTNER_INFO',
  payload: {
    partnerInfo,
  },
});

export const changePoint = point => ({
  type: 'CHANGE_POINT',
  payload: {
    point,
  },
});

export const changeMessage = message => ({
  type: 'CHANGE_MESSAGE',
  payload: {
    message,
  },
});

export const setTicketList = tickets => ({
  type: 'SET_TICKET_LIST',
  payload: {
    tickets,
  },
});

export const setReceivedTickets = receivedTickets => ({
  type: 'SET_RECEIVED_TICKETS',
  payload: {
    receivedTickets,
  },
});

const setSentTickets = sentTickets => ({
  type: 'SET_SENT_TICKETS',
  payload: {
    sentTickets,
  },
});

export const setReceivedPointList = receivedPointList => ({
  type: 'SET_RECEIVED_POINT_LIST',
  payload: {
    receivedPointList,
  },
});

/*
Next関数
*/
// ログインユーザの基本情報を取得
export const fetchUserInfo = () => (
  (dispatch) => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    const userRef = db.collection('users').doc(currentUser.uid);

    userRef.onSnapshot((doc) => {
      dispatch(setUserInfo(doc.data()));
    });
  }
);

// パートナーの基本情報を取得
export const fetchPartnerInfo = () => (
  (dispatch, getState) => {
    const db = firebase.firestore();
    const { partnerUid } = getState().checkPartner;
    const partnerRef = db.collection('users').doc(partnerUid);

    partnerRef.onSnapshot((doc) => {
      dispatch(setPartnerInfo(doc.data()));
    });
  }
);

// ポイントとメッセージをFirestoreに登録
export const sendPointAndMessage = () => (
  (dispatch, getState) => {
    const { partnerInfo, point, message } = getState().mypage;
    const { partnerUid } = getState().checkPartner;
    const totalPoint = partnerInfo.point + point;
    const db = firebase.firestore();
    const partnerRef = db.collection('users').doc(partnerUid);
    const pointRef = db.collection(`users/${partnerUid}/point`);

    // 送ったポイントをパートナーのCollectionに追加していく
    pointRef.add({
      sent_time: new Date(),
      point,
      message,
    }).then(() => {
      console.log('Add Point'); // eslint-disable-line
    }).catch((err) => {
      console.log(err); // eslint-disable-line
    });

    // パートナー側のpointを更新
    partnerRef.set({
      point: totalPoint,
    }, { merge: true }).then(() => {
      // 表示ポイントとメッセージのリセット
      dispatch(changePoint(0));
      dispatch(changeMessage(''));
    }).catch((err) => {
      console.log(err); // eslint-disable-line
    });
  }
);

// 送ったチケット一覧の取得とリッスン
export const fetchSentTickets = () => (
  (dispatch, getState) => {
    const { partnerUid } = getState().checkPartner;
    const db = firebase.firestore();
    const sentTicketsRef = db.collection(`users/${partnerUid}/tickets`);

    sentTicketsRef.orderBy('exchange_time', 'desc').onSnapshot((querySnapshot) => {
      const sentTickets = [];
      querySnapshot.forEach((doc) => {
        sentTickets.push(doc.data());
      });
      dispatch(setSentTickets(sentTickets));
    });
  }
);
