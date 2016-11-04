'use strict'

import {FETCH_CASTLE_BY_CATEGORY} from '../constants'


export default function (state = [], action) {
  switch(action.type) {
      case FETCH_CASTLE_BY_CATEGORY: 
        return action.castlesByCategory
    default: 
        return state
  }
};


