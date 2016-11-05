'use strict'

// import {FETCH_CASTLE_BY_CATEGORY} from '../constants'


export const FETCH_CASTLE_BY_CATEGORY = 'FETCH_CASTLE_BY_CATEGORY'

export const fetchCategorySync = (castlesByCategory) => ({
    type: FETCH_CASTLE_BY_CATEGORY,
    castlesByCategory
})



export const searchReducer = function (state = [], action) {
  switch(action.type) {
      case FETCH_CASTLE_BY_CATEGORY: 
        return action.castlesByCategory
    default: 
        return state
  }
};


export const search = function (searchWord) {
    dispatch => 
        axios.post('/api/castles/search' + {searchWord})
        .then(castles => {
            dispatch(fetchCategorySync(castles))
        })
        .catch(err => console.error(err));
};
