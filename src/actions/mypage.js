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
