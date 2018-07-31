import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';

const SendPointDialog = ({ open, handleClose }) => (
  <Dialog
    open={open}
    onClose={() => handleClose()}
  >
    <DialogContent>
      <DialogContentText>
        パートナーにポイントを送りました。
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button
        onClick={() => handleClose()}
        color="primary"
      >
        戻る
      </Button>
    </DialogActions>
  </Dialog>
);

SendPointDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default SendPointDialog;
