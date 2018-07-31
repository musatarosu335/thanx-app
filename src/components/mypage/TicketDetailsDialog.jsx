import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

const TicketDetailsDialog = ({ ticket, open, handleClose }) => (
  <Dialog
    open={open}
    onClose={() => handleClose()}
  >
    <DialogTitle>{ticket.ticket_name}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        {ticket.description}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button
        onClick={() => handleClose()}
        color="primary"
      >
        チケット一覧へ
      </Button>
    </DialogActions>
  </Dialog>
);

TicketDetailsDialog.propTypes = {
  ticket: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default TicketDetailsDialog;
