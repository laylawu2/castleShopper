import {connect} from 'react-redux';

import Cart from '../components/Cart';


const mapStateToProps = ({ cart }) => ({
	cart
});

// const mapDispatchToProps = dispatch => {
// 	dispatch(fetchAndGoToCart())
// }

export default connect()(Cart);