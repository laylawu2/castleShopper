import React from 'react';
import { FormattedNumber } from 'react-intl';

import AddressForm from './forms/address';
import PaymentForm from './forms/payment';

/*
	need user address, email info
*/

export default ({ address, email }) => (
	<div className="container">
	<form action="" method="POST">
	  <script
	    src="https://checkout.stripe.com/checkout.js" className="stripe-button"
	    data-key="pk_test_L8JDZOz4L1mdNBEfgfQETC7V"
	    data-amount="999"
	    data-name="Demo Site"
	    data-description="Widget"
	    data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
	    data-locale="auto">
	  </script>
	</form>
		{/*<div className="product-info row">
			<img className="col-lg-4" src="http://www.castles.org/images/sd6_small.jpg" />
			<div className="col-lg-8">
				<h3>Sleeping beauty castle</h3>
				<ul className="list-unstyled">
					<li>Description: This is an amazing castle, great value, will guarentee you a good night sleep...</li>
					<li>Size: 5000 sqft</li>
					<li>Location: Germany</li>
					<li>Price: <FormattedNumber value={ 500000000 } style="currency" currency="USD" /></li>
				</ul>
			</div>
		</div>
		<form className="row payment-form">
			<PaymentForm />
			<div className="form-group billing-info">
				<h3>Billing Information</h3>
				<AddressForm />
			</div>
			<div className="form-group shipping-info">
				<h3>Shipping Address</h3>
				<div className="form-check has-danger">
					<label htmlFor="same-as-billing" className="form-check-label">
						<input name="same-as-billing" type="checkbox" className="form-check-input" defaultChecked />
						Same as billing address
					</label>
				</div>
			</div>
			<button type="submit" className="btn btn-success">Buy for real</button>
		</form>*/}
	</div>
);