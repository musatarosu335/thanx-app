import { connect } from 'react-redux';
import SettingsPage from '../../components/settings/SettingsPage';
import { toggleSnackbar } from '../../actions/settings';

const mapStateToProps = ({ settings }) => ({
  closedStateSnackbar: settings.closedStateSnackbar,
});

const mapDispatchToProps = dispatch => ({
  toggleSnackbar(closedState) {
    dispatch(toggleSnackbar(closedState));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
