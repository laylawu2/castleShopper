'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import { IntlProvider } from 'react-intl'; // i18n

import HomepageContainer from './containers/HomepageContainer';
import UserContainer from './containers/UserContainer';
import CartContainer from './containers/CartContainer';
import CheckoutContainer from './containers/CheckoutContainer';
import store from './store'

import {onHomeEnter} from './enter-hooks'



render (
	<IntlProvider locale="en">
	<div className="container-fluid">
	  <Provider store={ store }>
	    <Router history={ hashHistory }>
	      <Route path="/" onEnter={onHomeEnter}>
	        <IndexRedirect to="/home" />
	        <Route path="home" component={ HomepageContainer } />
	        <Route path="/user" component={ UserContainer } />
	        <Route path="/cart" component={ CartContainer } />
	        <Route path="/checkout" component={ CheckoutContainer } />
	      </Route>
	    </Router>
	  </Provider>
  </div>
  </IntlProvider>,
  document.getElementById('main')
)