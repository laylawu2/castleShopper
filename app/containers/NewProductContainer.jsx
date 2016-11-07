import { connect } from 'react-redux';
import NewProduct from 'APP/app/components/NewProduct'
import { addCastle } from '../reducers/admin'

const mapDispatchToProps = { addCastle }
//                       = { addCastle: addCastle}
export default connect(null, mapDispatchToProps)(NewProduct)