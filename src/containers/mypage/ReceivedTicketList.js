import { connect } from 'react-redux';
import ReceivedTicketList from '../../components/mypage/ReceivedTicketList';

const mapStateToProps = ({ mypage }) => ({
  receivedTickets: mypage.receivedTickets,
});

export default connect(mapStateToProps)(ReceivedTicketList);
