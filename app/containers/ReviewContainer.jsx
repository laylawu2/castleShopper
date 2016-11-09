import {connect} from 'react-redux';
import Review from '../components/Review'


const mapState = ({reviews}) => ({reviews})

export default connect(mapState, null)(Review)