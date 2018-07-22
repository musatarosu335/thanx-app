import { connect } from 'react-redux';
import ExchangeTicketButton from '../../components/mypage/ExchangeTicketButton';

const mapStateToProps = ({ mypage }) => ({
  userInfo: mypage.userInfo,
});

export default connect(mapStateToProps)(ExchangeTicketButton);
