import { connect } from 'react-redux';
import SentTicketList from '../../components/mypage/SentTicketList';

const mapStateToProps = ({ mypage }) => ({
  sentTickets: mypage.sentTickets,
});

export default connect(mapStateToProps)(SentTicketList);
