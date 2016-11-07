import {connect} from 'react-redux';

import SingleCastle from '../components/SingleCastle';

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
const mapStateToProps = ({oneCastle}) => ({
    oneCastle
})

export default connect(mapStateToProps)(SingleCastle);