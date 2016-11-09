import {connect} from 'react-redux';

import SingleCastle from '../components/SingleCastle';

import {newBidForThisUser} from '../action-creators/bid';
import {checkoutCastle} from '../action-creators/checkout'


// function mapStateToProps (state) {
//   return {
//     aBunchOfPuppies: state.puppies
//   };
// }
// function mapDispatchToProps () {
//   return {};
// }

// // connect(mapStateToProps, mapDispatchToProps)(AllPuppies);

// const containerComponentCreator = connect(mapStateToProps, mapDispatchToProps);

// const AllPuppiesContainer = containerComponentCreator(AllPuppies);



const mapStateToProps = ({oneCastle, highestBid, user, reviews}) => ({

    oneCastle, 
    highestBid, 
    user, 
    reviews
})

const mapDispatchToProps = dispatch => ({
  addBid: (newBid) => dispatch(newBidForThisUser(newBid)), 
  checkout: (castle) => dispatch(checkoutCastle(castle))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCastle);