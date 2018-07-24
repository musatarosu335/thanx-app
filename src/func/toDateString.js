const toDateString = (timestamp) => {
  if (timestamp === null) {
    return '';
  }

  const date = timestamp.toDate();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dateString = `${year}年${month}月${day}日`;

  return dateString;
  /*
  const offsetVal = timestamp.val() || 0;
  const serverTime = Date.now() + offsetVal;
  */
};

export default toDateString;
