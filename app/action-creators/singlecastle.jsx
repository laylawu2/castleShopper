'use strict'

import {RECEIVE_CASTLE} from '../constants'
// import axios from 'axios'
 

//homepage action creator to be used in thunk
export const receiveCastle = (castle) => ({
    type: RECEIVE_CASTLE,
    castle
})