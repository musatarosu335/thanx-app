import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    margin: 8,
    display: 'flex',
  },
});

const TicketLeft = styled.div`
  flex: 2;
  margin: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TicketRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 2px dashed rgba(180, 180, 180, 0.48);
`;

const TicketName = styled.div`
  font-weight: bold;
  flex: 1;
`;

const TicketDate = styled.div`
  flex: 1;
  font-size: 0.7rem;
  font-style: oblique;
  color: #999999;
`;

const ReceivedTicket = ({ classes }) => (
  <Paper className={classes.root} elevation={1}>
    <TicketLeft>
      <TicketName>
        チケット名
      </TicketName>
      <TicketDate>
        2018/06/07
      </TicketDate>
    </TicketLeft>
    <TicketRight>
      ボタン
    </TicketRight>
  </Paper>
);

ReceivedTicket.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReceivedTicket);
