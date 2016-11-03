import { combineReducers } from 'redux'
import homepageReducer from './homepage'
import authReducer from './auth'






//to combine reducers:

const rootReducer = combineReducers({
    allCastles: homepageReducer,
    auth: authReducer
})

export default rootReducer 
