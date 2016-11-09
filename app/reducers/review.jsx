import axios from 'axios'
// ------------ constants-------------------
import {RECEIVE_CASTLE_REVIEWS} from '../constants'
const ADD = 'ADD_REVIEW';
const UPDATE = 'UPDATE_REVIEW';
const REMOVE = 'REMOVE_REVIEW';

// // ------------ admin reducer --------------

export default function reducer(state=[], action){
  console.log('reducer', action.review)
  switch(action.type) {
    case RECEIVE_CASTLE_REVIEWS: return action.reviews
    case ADD: return [action, ...reviews]
    case UPDATE: return action.review
    case REMOVE: return action.review
    default: return state
  }
}

//-------------action creators ------------------
// export init = s) => ({ type:INITIALIZE,s })

export const create = reviewFromDB => ({ type: ADD,reviewFromDB})

export const update = reviewFromDB => ({ type: UPDATE,reviewFromDB})

export const remove = reviewId => ({ type: REMOVE,reviewId})


//-------------action dispatchers--------------------


// export const update = Info => dispatch => {
//   axio.put(`/apis/${id}`,Info)
//     .then(res => dispatch(update(res.data)))
// }

// export const remove = () => dispatch => {}