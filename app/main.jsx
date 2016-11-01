'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import HomepageContainer from './containers/HomepageContainer';

import store from './store'

render (
	<div className="container-fluid">
	  <Provider store={ store }>
	    <Router history={ hashHistory }>
	      <Route path="/">
	        <IndexRedirect to="/home" />
	        <Route path="home" component={ HomepageContainer } />
	      </Route>
	    </Router>
	  </Provider>
  </div>,
  document.getElementById('main')
)