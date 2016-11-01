import {connect} from 'react-redux';

import Checkout from '../components/Checkout';

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


export default connect()(Checkout);