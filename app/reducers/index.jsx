import { combineReducers } from 'redux'

import homepageReducer from './homepage'
import authReducer from './auth'
import singleCastle from './singleCastle'
import bidReducer from './newBid'
import bidsReducer from './userBids.jsx'
import castleBidsReducer from './castleBids.jsx'
import {categoryReducer} from './category'
import checkoutReducer from './checkout';






//to combine reducers:

const rootReducer = combineReducers({
    allCastles: homepageReducer,
    oneCastle: singleCastle,
    user: authReducer,
    category: categoryReducer,
    checkout: checkoutReducer,
    highestBid: bidReducer,
    category: categoryReducer,
    userBids: bidsReducer, 
    castleBids: castleBidsReducer
})

export default rootReducer
