import { connect } from 'react-redux';
import Header from '../../components/common/Header';
import { toggleSidebar } from '../../actions/common';

const mapStateToProps = ({ common }) => ({
  isOpenSidebar: common.isOpenSidebar,
});

const mapDispatchToProps = dispatch => ({
  toggleSidebar(isOpen) {
    dispatch(toggleSidebar(isOpen));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
