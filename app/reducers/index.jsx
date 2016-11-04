import { combineReducers } from 'redux'
import homepageReducer from './homepage'
import authReducer from './auth'






//to combine reducers:

const rootReducer = combineReducers({
    allCastles: homepageReducer,
    login: authReducer
})

export default rootReducer 
