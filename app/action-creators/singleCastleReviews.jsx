'use strict'

import {RECEIVE_CASTLE_REVIEWS} from '../constants'
// import axios from 'axios'
import {RECEIVE_NEW_REVIEW} from '../constants'

//homepage action creator to be used in thunk
export const receiveCastleReviews = (reviews) => ({
    type: RECEIVE_CASTLE_REVIEWS,
    reviews
})

export const newReview = (newReview) => ({
  type: RECEIVE_NEW_REVIEW,
  newReview
})