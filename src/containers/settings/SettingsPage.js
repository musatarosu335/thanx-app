import { connect } from 'react-redux';
import SettingsPage from '../../components/settings/SettingsPage';
import { toggleSnackbar } from '../../actions/settings';

const mapStateToProps = ({ settings }) => ({
  isOpenSnackbar: settings.isOpenSnackbar,
});

const mapDispatchToProps = dispatch => ({
  toggleSnackbar(isOpen) {
    dispatch(toggleSnackbar(isOpen));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);
