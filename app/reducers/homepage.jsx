'use strict'

import {RECEIVE_ALL_CASTLES} from '../constants'


export default function (state = [], action) {
  switch(action.type) {
      case RECEIVE_ALL_CASTLES:
        return action.castles
    default:
        return state
  }
};


