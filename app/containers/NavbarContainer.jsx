import {connect} from 'react-redux';
import Navbar from '../components/Navbar';
import {logoutUserAction} from '../reducers/auth'
import {logout} from '../reducers/auth'



//make sure root reducer has this key allCastles
const mapStateToProps = ({user}) => ({
    user
})

//onSubmit etc should go here to put into my presentational component 

// function mapDispatchToProps () {
//   return {};
// }

// export const logout = () =>
//   dispatch => {
//     console.log("IN LOGOUT")
//     return(
//       axios.post('/api/auth/logout')
//       .then(() => dispatch(whoami()))
//       .catch(() => dispatch(whoami()))
//     )
//   }


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())  
});


// ;
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);