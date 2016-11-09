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
import NewProductContainer from './containers/NewProductContainer';
import SingleCastleContainer from './containers/SingleCastleContainer';

import store from './store'
import Root from './components/Root'
import {onHomeEnter} from './enter-hooks'
import {getSingleCastle} from './enter-hooks'
import {onCategoryEnter} from './enter-hooks'
import {getReviewsForUser} from './enter-hooks'
import {getBidsForUser} from './enter-hooks'
import {dispatchOnEnter} from './enter-hooks'



render (
	<IntlProvider locale="en">
	  <Provider store={ store }>
	    <Router history={ hashHistory }>
	      <Route path="/" onEnter={onHomeEnter} component={Root}>
	        <IndexRedirect to="/home" />
	        <Route path="home" component={ HomepageContainer } />
	        <Route path="/user/:userId" component={ UserContainer } onEnter={dispatchOnEnter}/>
	        <Route path="/cart" component={ CartContainer } />
	        <Route path="/checkout" component={ CheckoutContainer } />
	        <Route path="/castles/add" component={ NewProductContainer } />
					<Route path="/castles/search/:searchByCategory" />
					<Route path="/castles/:castleId" component={ SingleCastleContainer } onEnter={getSingleCastle} />
				</Route>
	    </Router>
	  </Provider>
  </IntlProvider>,
  document.getElementById('main')
)