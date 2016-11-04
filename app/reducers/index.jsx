import { combineReducers } from 'redux'
import homepageReducer from './homepage'
import authReducer from './auth'
import searchReducer from './searchbar'



//to combine reducers:

const rootReducer = combineReducers({
    allCastles: homepageReducer,
    login: authReducer,
    search: searchReducer
})

export default rootReducer 
