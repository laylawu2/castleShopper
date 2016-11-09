'use strict'

import {RECEIVE_CASTLE_REVIEWS} from '../constants'
// import axios from 'axios'


//homepage action creator to be used in thunk
export const receiveCastleReviews = (reviews) => ({
    type: RECEIVE_CASTLE_REVIEWS,
    reviews
})