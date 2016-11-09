import {connect} from 'react-redux';
import {bidResolved} from '../action-creators/bid'

import User from '../components/User';

const mapStateToProps = ({user, oneCastle, highestBid, userBids}) => ({
    user, 
    oneCastle, 
    highestBid, 
    userBids
})


// const mapDispatchToProps = dispatch => ({
//   resolveBid: (resolve) => dispatch(bidResolved(resolve))
// });


export default connect(mapStateToProps)(User);