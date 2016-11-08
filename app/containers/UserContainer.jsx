import {connect} from 'react-redux';

import User from '../components/User';

const mapStateToProps = ({user, oneCastle, highestBid, userBids}) => ({
    user, 
    oneCastle, 
    highestBid, 
    userBids
})

export default connect(mapStateToProps)(User);