import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ExchangeTicketButton from '../../containers/mypage/ExchangeTicketButton';

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

const Ticket = ({ ticket, classes }) => (
  <Paper className={classes.root} elevation={1}>
    <PanelHeader>
      {ticket.ticket_name}
    </PanelHeader>
    {/*
      <Typography component="p">
        {ticket.description}
      </Typography>
    */}
    <Point>
      {ticket.point}pt
    </Point>
    <ExchangeTicketButton ticket={ticket} />
  </Paper>
);

Ticket.propTypes = {
  ticket: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Ticket);
