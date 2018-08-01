import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import ExchangeTicketButton from '../../containers/mypage/ExchangeTicketButton';
import TicketDetailsDialog from './TicketDetailsDialog';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    margin: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const PanelHeader = styled.div`
  width: 100%;
  background: #dfefff;
  box-shadow: 0px 0px 0px 5px #dfefff;
  border: dashed 2px white;
  padding: 0.2em 0.5em;
  text-align: center;
`;

const Point = styled.p`
  background: linear-gradient(transparent 70%, #a7d6ff 70%);
  font-size: 1.1rem;
`;

class Ticket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDetailDialog: false, // Reduxで管理する必要なし
    };
  }

  handleOpenDetailDialog() {
    this.setState({ openDetailDialog: true });
  }

  handleCloseDetailDialog() {
    this.setState({ openDetailDialog: false });
  }

  render() {
    const { ticket, classes } = this.props;

    return (
      <Paper className={classes.root} elevation={1}>
        <PanelHeader onClick={() => this.handleOpenDetailDialog()}>
          {ticket.ticket_name}
        </PanelHeader>
        <Point>
          {ticket.point}pt
        </Point>
        <ExchangeTicketButton ticket={ticket} />
        <TicketDetailsDialog
          ticket={ticket}
          open={this.state.openDetailDialog}
          handleClose={() => this.handleCloseDetailDialog()}
        />
      </Paper>
    );
  }
}

Ticket.propTypes = {
  ticket: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Ticket);
