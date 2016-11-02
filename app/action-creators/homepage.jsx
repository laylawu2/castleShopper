'use strict'

import {RECEIVE_ALL_CASTLES} from '../constants'
// import axios from 'axios'
 

//homepage action creator to be used in thunk
export const receiveAllCastles = (castles) => ({
    type: RECEIVE_ALL_CASTLES,
    castles
})


//still need to set up the back end
// export const fetchAllCastles = () =>
//     dispatch =>
//         fetch('/api/home')
//         .then(res => res.json())
//         .then(castles => dispatch(receiveAllCastles(castles)))

