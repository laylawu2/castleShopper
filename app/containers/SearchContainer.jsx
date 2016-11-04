import {connect} from 'react-redux';
import {fetchCategorySync} from '../action-creators/searchbar'
import Search from '../components/Search';


// export const fetchCategorySync = (castlesByCategory) => ({
//     type: FETCH_CASTLE_BY_CATEGORY,
//     castlesByCategory
// })

const searchWordThunk = function (searchWord) {
    dispatch => 
        fetch('/api/castles/' + searchWord)
        .then(res => res.json())
        .then(castles => {
            dispatch(fetchCategorySync(castles))
        })
        .catch(err => console.error(err));
};

const mapDispatchToProps = function (dispatch) {
  return {
    searchWord: function (userSearchedWord) {
      const thunk = searchWordThunk(userSearchedWord);
      dispatch(thunk);
    }
  };
};


export default connect(null,mapDispatchToProps)(Search);