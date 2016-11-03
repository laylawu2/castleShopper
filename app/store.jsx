import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import creatLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import homepageReducer from './reducers/homepage'


//change homepageReducer below and use rootReducer in place of homepageReducer

export default createStore(rootReducer, applyMiddleware(creatLogger(), thunkMiddleware))

//just for homepage:

// export default createStore(homepageReducer, applyMiddleware(creatLogger(), thunkMiddleware))
