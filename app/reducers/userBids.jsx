
import {USER_BIDS} from '../constants';

export default function (state = {}, action) {
  switch(action.type) {
      case USER_BIDS:
      return action.userBids
    default: 
        return state
  }
};