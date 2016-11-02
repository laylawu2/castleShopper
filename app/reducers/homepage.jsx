'use strict'

import {RECEIVE_ALL_CASTLES} from '../constants'

const initialState = {}

export default function (state = initialState, action) {
  switch(action.type) {
      case RECEIVE_ALL_CASTLES: 
        return Object.assign({},state,action.castles)
    default: 
        return state
  }
};


