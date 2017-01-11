import { combineReducers } from 'redux'

import homepageReducer from './homepage'
import authReducer from './auth'
import singleCastle from './singleCastle'
import bidReducer from './newBid'
import bidsReducer from './userBids.jsx'
import castleBidsReducer from './castleBids.jsx'
import {ascendingReducer, descendingReducer} from './category'
//import {categoryReducer} from './category'
import reviewReducer from './review'
import {bidResolvedReducer} from './bidResolved.jsx'
import checkoutReducer from './checkout';

//to combine reducers:

const rootReducer = combineReducers({
    allCastles: homepageReducer,
    oneCastle: singleCastle,
    user: authReducer,
    // category: categoryReducer,
    reviews: reviewReducer,
    ascending: ascendingReducer,
    descending: descendingReducer,
    highestBid: bidReducer,
    userBids: bidsReducer,
    castleBids: castleBidsReducer,
    castle: checkoutReducer

})

export default rootReducer
