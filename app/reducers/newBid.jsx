import {NEW_BID_FOR_THIS_USER} from '../constants';

export default function (state = [], action) {
  switch(action.type) {
      case NEW_BID_FOR_THIS_USER:
      return action.newBid
    default: 
        return state
  }
};