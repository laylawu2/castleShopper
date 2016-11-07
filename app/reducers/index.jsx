import { combineReducers } from 'redux'

import homepageReducer from './homepage'
import authReducer from './auth'
import singleCastle from './singleCastle'
import {searchReducer} from './searchbar'
import bidReducer from './newBid'
import {categoryReducer} from './category'
import {searchReducer} from './searchbar'
import checkoutReducer from './checkout';





//to combine reducers:

const rootReducer = combineReducers({
    allCastles: homepageReducer,
    oneCastle: singleCastle,
    user: authReducer,
<<<<<<< HEAD
    category: categoryReducer,
    search: searchReducer,
    checkout: checkoutReducer
=======
    search: searchReducer, 
    highestBid: bidReducer
    category: categoryReducer

>>>>>>> master
})

export default rootReducer
