import {connect} from 'react-redux';
import Navbar from '../components/Navbar';



//make sure root reducer has this key allCastles
const mapStateToProps = ({auth}) => ({
    auth
})

//onSubmit etc should go here to put into my presentational component 

// function mapDispatchToProps () {
//   return {};
// }

// const mapDispatchToProps = dispatch => ({
//   go: album => dispatch(fetchAllCastles())
// });


// ;
export default connect(mapStateToProps)(Navbar);