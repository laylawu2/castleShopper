'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import HomepageContainer from './containers/HomepageContainer';
import UserContainer from './containers/UserContainer';
import CartContainer from './containers/CartContainer';
import CheckoutContainer from './containers/CheckoutContainer';

import store from './store'

render (
	<div className="container-fluid">
	  <Provider store={ store }>
	    <Router history={ hashHistory }>
	      <Route path="/">
	        <IndexRedirect to="/home" />
	        <Route path="home" component={ HomepageContainer } />
	        <Route path="/user" component={ UserContainer } />
	        <Route path="/cart" component={ CartContainer } />
	        <Route path="/checkout" component={ CheckoutContainer } />
	      </Route>
	    </Router>
	  </Provider>
  </div>,
  document.getElementById('main')
)