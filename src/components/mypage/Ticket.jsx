import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ExchangeTicketButton from './ExchangeTicketButton';

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
  font-weight: bold;
`;

const Ticket = ({ ticket, classes }) => (
  <Paper className={classes.root} elevation={1}>
    <PanelHeader>
      {ticket.ticket_name}
    </PanelHeader>
    <Typography component="p">
      {ticket.description}
    </Typography>
    <Typography component="p">
      {ticket.point}pt
    </Typography>
    <ExchangeTicketButton />
  </Paper>
);

Ticket.propTypes = {
  ticket: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Ticket);
