import {connect} from 'react-redux';
import Navbar from '../components/Navbar';
import {logoutUserAction} from '../reducers/auth'
import {logout} from '../reducers/auth'


//make sure root reducer has this key allCastles
const mapStateToProps = ({login}) => ({
    login
})

//onSubmit etc should go here to put into my presentational component 

// function mapDispatchToProps () {
//   return {};
// }

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});


// ;
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);