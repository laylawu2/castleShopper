import { combineReducers } from 'redux'
import homepageReducer from './homepage'
import authReducer from './auth'
import singleCastle from './singleCastle'
import {searchReducer} from './searchbar'




//to combine reducers:

const rootReducer = combineReducers({
    allCastles: homepageReducer,
    singleCastle: singleCastle,
    user: authReducer,
    search: searchReducer
})

export default rootReducer 
