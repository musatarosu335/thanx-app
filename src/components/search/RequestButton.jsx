import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import _ from 'lodash';

const styles = () => ({
  button: {
    flex: 1,
  },
});

const RequestButton = ({
  uid,
  follower,
  writeFollowingAndFollowerUser,
  classes,
}) => {
  // 検索ユーザが自分をフォローしているか否か
  const isFollowed = _.find(follower, user => user.uid === uid);

  if (!isFollowed) {
    return (
      <Button
        variant="contained"
        className={classes.button}
        onClick={() => writeFollowingAndFollowerUser(uid)}
      >
        リクエスト
      </Button>
    );
  }

  return (
    <Button
      variant="contained"
      disabled
      className={classes.button}
      onClick={() => writeFollowingAndFollowerUser(uid)}
    >
      リクエストを受けています
    </Button>
  );
};

RequestButton.propTypes = {
  uid: PropTypes.string.isRequired,
  follower: PropTypes.array.isRequired,
  writeFollowingAndFollowerUser: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RequestButton);
