import React from 'react';
import { MONTHS, YEARS } from './constants';
import AddressForm from './address';

export default ({ castle, user }) => (
	<div className="form-group payment-info">

		<h3>Payment Information</h3>
		  <span className="payment-errors"></span>

		  <div className="row form-row">
		    <label>
		      <span>Card Number</span>
		      <input type="text" size="20" data-stripe="number" className="form-control" />
		    </label>
		  </div>

		  <div className="row form-row">
		    <label>
		      <span>Expiration (MM/YY)</span>
		      <input type="text" size="2" data-stripe="exp_month" className="form-control" />
		    
		    <span> / </span>
		    <input type="text" size="2" data-stripe="exp_year" className="form-control" />
		    </label>
		  </div>

		  <div className="row form-row">
		    <label>
		      <span>CVC</span>
		      <input type="text" size="4" data-stripe="cvc" className="form-control" />
		    </label>
		  </div>
		  <input type="submit" className="submit btn btn-primary" value="Submit Payment" />
		
	</div>
);
