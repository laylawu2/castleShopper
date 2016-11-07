'use strict'

import {RECEIVE_CASTLE} from '../constants'

 

//homepage action creator to be used in thunk
export const receiveCastle = (oneCastle) => ({
    type: RECEIVE_CASTLE,
    oneCastle
})

