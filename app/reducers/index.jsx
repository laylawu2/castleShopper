import { combineReducers } from 'redux'
import homepageReducer from './homepage'
import authReducer from './auth'
import singleCastle from './singleCastle'






//to combine reducers:

const rootReducer = combineReducers({
    allCastles: homepageReducer,
    login: authReducer, 
    singleCastle: singleCastle
})

export default rootReducer 
