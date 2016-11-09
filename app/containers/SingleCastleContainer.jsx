import {connect} from 'react-redux';

import SingleCastle from '../components/SingleCastle';

import {newBidForThisUser} from '../action-creators/bid';


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



const mapStateToProps = ({oneCastle, highestBid, user}) => ({
    oneCastle, 
    highestBid, 
    user

})

const mapDispatchToProps = dispatch => ({
  addBid: (newBid) => dispatch(newBidForThisUser(newBid))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCastle);