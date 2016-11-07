'use strict'

import {RECEIVE_CASTLE} from '../constants'


export default function (state = [], action) {
  switch(action.type) {
      case RECEIVE_CASTLE: 
        return action.oneCastle
    default: 
        return state
  }
};