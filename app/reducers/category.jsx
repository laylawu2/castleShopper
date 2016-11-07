'use strict'

import {FETCH_CASTLES_BY_CATEGORY} from '../constants'



export const categoryReducer = function (state = [], action) {
  switch(action.type) {
      case FETCH_CASTLES_BY_CATEGORY: 
        return action.castlesByCategory
    default: 
        return state
  }
};
