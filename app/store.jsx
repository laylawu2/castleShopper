import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import creatLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import homepageReducer from './reducers/homepage'

export default createStore(homepageReducer, applyMiddleware(creatLogger(), thunkMiddleware))
