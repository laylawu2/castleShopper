import {connect} from 'react-redux';
import {bidResolved} from '../action-creators/bid'
import checkoutCastle from '../action-creators/checkout'

import User from '../components/User';

const mapStateToProps = ({user, oneCastle, highestBid, userBids}) => ({
    user, 
    oneCastle, 
    highestBid, 
    userBids
})


const mapDispatchToProps = dispatch => ({
  checkout: (castle) => dispatch(checkoutCastle(castle))
});


export default connect(mapStateToProps)(User);