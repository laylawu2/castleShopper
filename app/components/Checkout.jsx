import React from 'react';
import { FormattedNumber } from 'react-intl';
// import scriptLoader from 'react-async-script-loader';

import AddressForm from './forms/address';
import PaymentForm from './forms/payment';
import CastleInfo from './forms/castleInfo';

/*
	need user address, email info
*/

export default class Checkout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			submitDisabled: false,
			token: 0,
			paymentComplete: false,
			paymentError: false
		}
        this.onSubmit = this.onSubmit.bind(this);
	}
	onSubmit(event) {
		console.log("onsubmit, this" , this);
	    let self = this;
	    event.preventDefault();
	    this.setState({ submitDisabled: true, paymentError: null });
	    // send form here
	    Stripe.createToken(event.target, function(status, response) {
	      if (response.error) {
	        self.setState({ paymentError: response.error.message, submitDisabled: false });
	      }
	      else {
	        self.setState({ paymentComplete: true, submitDisabled: false, token: response.id });
	        // make request to your server here!
	      }
	    });
	}
	// componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
	//     if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished 
	//       if (isScriptLoadSucceed) {
	//         this.initEditor()
	//       }
	//       else this.props.onError()
	//     }
	//   }
	 
	//   componentDidMount () {
	//     const { isScriptLoaded, isScriptLoadSucceed } = this.props
	//     if (isScriptLoaded && isScriptLoadSucceed) {
	//       this.initEditor()
	//     }
	//   }
render() {
	let { castle, user } = this.props;
return (
	<div className="container">

		<CastleInfo castle={ castle } />

		<form action={`/api/bid/${castle.id}`} method="POST" id="payment-form" className="form-inline" onSubmit={ this.onSubmit }>
			<h3>Billing Address</h3>
			<AddressForm user={ user } />

			{/*<div className="form-group row">
						<h3>Shipping Address</h3>
							<div className="form-check has-danger">
								<label htmlFor="same-as-billing" className="form-check-label">
									<input name="same-as-billing" 
										type="checkbox" 
										className="form-check-input" 
										defaultChecked 
										onChange={ this.setState({ 
											showShippingAddrForm: !this.state.showShippingAddrForm 
										})} />
									Same as billing address
								</label>
							</div>
							{ this.state.showShippingAddrForm && <AddressForm /> }
						</div>*/}

			<PaymentForm castle={ castle } user={ user } />
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
}
}