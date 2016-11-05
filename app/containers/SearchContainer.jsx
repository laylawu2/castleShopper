import Navbar from '../components/Navbar';
import Search from '../components/Search';
import {search} from '../reducers/searchbar'

const mapStateToProps = ({search}) => ({
    search
})

const mapDispatchToProps = function (dispatch) {
  return {
    search: (searchWord) => dispatch(search())
  };
};


export default connect(null,mapDispatchToProps)(Navbar);