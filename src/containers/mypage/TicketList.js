import { connect } from 'react-redux';
import TicketList from '../../components/mypage/TicketList';

const mapStateToProps = ({ mypage }) => ({
  tickets: mypage.tickets,
});

export default connect(mapStateToProps)(TicketList);
