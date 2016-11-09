import {connect} from 'react-redux';
import Navbar from '../components/Navbar';
import {logoutUserAction} from '../reducers/auth'
import {logout} from '../reducers/auth'
import {ascending, descending} from '../reducers/category'



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

  logout: () => dispatch(logout()),
  ascending: () => dispatch(ascending()),
  descending: () => dispatch(descending())

});


// ;
export default connect(mapStateToProps,mapDispatchToProps)(Navbar);