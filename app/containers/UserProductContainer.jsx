import {connect} from 'react-redux';

import UserProduct from '../components/UserProduct';


// const mapStateToProps = ({ castles }) => ({
//   castles
// });

// const mapDispatchToProps = dispatch => {
//  dispatch(fetchAndGoToCart())
// }

export default connect()(UserProduct);