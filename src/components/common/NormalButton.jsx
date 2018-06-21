import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const NormalButton = (props) => {
  const { classes } = props;
  return (
    <Button variant="contained" color="primary" className={classes.button}>
      {props.children}
    </Button>
  );
};

NormalButton.propTypes = {
  children: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NormalButton);
