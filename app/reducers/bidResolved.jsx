import {BID_RESOLVED} from '../constants';

export default function (state = false, action) {
  switch(action.type) {
      case BID_RESOLVED:
      return action.resolved
    default: 
        return state
  }
};