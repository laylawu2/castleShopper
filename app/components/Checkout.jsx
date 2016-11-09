import React from 'react';
import { FormattedNumber } from 'react-intl';
// import scriptLoader from 'react-async-script-loader';

import AddressForm from './forms/address';
import PaymentForm from './forms/payment';
import CastleInfo from './forms/castleInfo';
import { STATES, COUNTRIES } from './forms/constants';

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
	    	console.log("event target", event.target);
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
	{
		castle ? console.log(castle) : console.log(null)
	}
		<CastleInfo castle={ castle } />

		<form action={`/api/bid/${castle.id}`} id="payment-form" className="form-inline" onSubmit={ e => this.onSubmit(e) }>
			<h3>Billing Address</h3>
			<div>
				<div className="row">
					<div className="col-lg-6">
						<input name="first-name" type="text" className="form-control" placeholder="First Name" />
					</div>
					<div className="col-lg-6">
						<input name="last-name" type="text" className="form-control" placeholder="Last Name" />
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<input name="street-address" type="text" className="form-control" placeholder="Street Address" />
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4">
						<input name="city" type="text" className="form-control" placeholder="City" />
					</div>
					<div className="col-lg-4">
						<select className="form-control" value="State">{/* options should change depending on country */}
							{ STATES.USA.map(state => (
								<option value={ state.name } key={ state.name }>{ state.abbreviation }</option>
								))
							}
						</select>
					</div>
					<div className="col-lg-4">
						<input name="first-name" type="text" className="form-control" placeholder="Zip Code" />
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8">
						<select className="form-control" defaultValue="Country">
						{ COUNTRIES.map(country => (
							<option value={ country } key={ country }>{ country }</option>
						))}
						</select>
					</div>
					<div className="col-lg-4">
						<input name="email" type="text" className="form-control" placeholder="Email" />
					</div>
					
				</div>
			</div>

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