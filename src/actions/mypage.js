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
