import axios from 'axios'
// ------------ constants-------------------
const INITIALIZE = 'INITIALIZE_CASTLE'
const ADD = 'ADD_CASTLE';
const UPDATE = 'UPDATE_CASTLE';
const REMOVE = 'REMOVE_CASTLE';

// // ------------ admin reducer --------------

export default function reducer(state=[], action){
  console.log('reducer', action.castle)
  switch(action.type) {
    case INITIALIZE: return action.castles
    case ADD: return [action.castle, ...castles]
    case UPDATE: return action.castle
    case REMOVE: return action.castle
    default: return state
  }
}

//-------------action creators ------------------
// export init = (castles) => ({ type:INITIALIZE, castles })

export const create = castleFromDB => ({ type: ADD, castleFromDB})

export const update = (castleFromDB) => ({ type: UPDATE, castleFromDB})

export const remove = (castleId) => ({ type: REMOVE, castleId})


//-------------action dispatchers--------------------

export const addCastle = (castleInfo) => dispatch => {
  //console.log('dispatchers', castleInfo)
  axios.post('/api/castles', castleInfo)
    .then(res => {
      console.log('inside dispatcher post', res.data)
      dispatch(create(res.data))
    })
    .catch(console.error)
}

export const updateCastle = castleInfo => dispatch => {
  axio.put(`/api/castles/${id}`, castleInfo)
    .then(res => dispatch(update(res.data)))
}

export const removeCastle = () => dispatch => {}