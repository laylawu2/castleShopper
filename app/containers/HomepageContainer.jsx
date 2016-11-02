import {connect} from 'react-redux';
import Homepage from '../components/Homepage';

// function mapStateToProps (state) {
//   return {
//     aBunchOfPuppies: state.puppies
//   };
// }

//make sure root reducer has this key allCastles
const mapStateToProps = ({allCastles}) => ({
    allCastles
})

//onSubmit etc should go here to put into my presentational component 

// function mapDispatchToProps () {
//   return {};
// }

// const mapDispatchToProps = dispatch => ({
//   go: album => dispatch(fetchAllCastles())
// });


// ;
export default connect(mapStateToProps)(Homepage);