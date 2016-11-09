'use strict'

import {BUY_CASTLE} from '../constants'


export default function (state = '', action) {
  switch(action.type) {
      case BUY_CASTLE: 
        return action.purchased
    default: 
        return state
  }
};


