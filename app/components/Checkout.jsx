import React from 'react';
import { FormattedNumber } from 'react-intl';
import scriptLoader from 'react-async-script-loader';

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
			paymentError: false,
			scriptLoaded: false
		}
        this.onSubmit = this.onSubmit.bind(this);
	}
	
	onSubmit(event) {
		console.log("onsubmit, this" , event.target);
	    let self = this;
	    event.preventDefault();
	    this.setState({ submitDisabled: true, paymentError: null });

	    Stripe.card.validateCardNumber('4242424242424242')
	    Stripe.card.validateExpiry(2, 2016)
	    Stripe.card.validateCVC('123') 
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
	initForm() {

	}
	/* componentWillReceiveProps ({ isScriptLoaded, isScriptLoadSucceed }) {
	    if (isScriptLoaded && !this.props.isScriptLoaded) { // load finished 
	      if (isScriptLoadSucceed) {
	        // do something
	      this.setState({
	      	scriptLoaded: true
	      })
	      }
	      else this.props.onError()
	    }
	  }
	 
	  componentDidMount () {
	    const { isScriptLoaded, isScriptLoadSucceed } = this.props
	    if (isScriptLoaded && isScriptLoadSucceed) {
	    	console.log("scriptLoaded");
	      this.setState({
	      	scriptLoaded: true
	      })
	    }
	  }*/
render() {
	let { castle, user } = this.props;
	
	
return (
	<div className="container">
	{
		castle ? console.log(castle) : console.log(null)
	}
		<CastleInfo castle={ castle } />

		<form action={`/api/bid/${castle.id}`} id="payment-form" onSubmit={ e => this.onSubmit(e) }>
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
				  	<div className="col-lg-12">
				      <input type="text" size="20" data-stripe="number" className="form-control" placeholder="Card Number" />
				  	</div>
				  </div>

				  <div className="row form-row">
				  	<div className="col-lg-2">
				      <span>Expiration Date</span>
				    </div>
				    <div className="col-lg-2">
					    <input type="text" size="2" data-stripe="exp_month" className="form-control" placeholder="MM" />
				    </div>
				    <div className="col-lg-4">
					    <input type="text" size="2" data-stripe="exp_year" className="form-control" placeholder="YYYY" />
				  	</div>

					<div className="col-lg-4">
					    <input type="text" size="4" data-stripe="cvc" className="form-control" placeholder="CVC" />
					</div>
				  </div>
				  <div className="row">
				  	<div className="col-lg-12">
				  <input type="submit" width="inherit" className="submit btn btn-primary" value="Buy For Real" />
					</div>
					</div>
			</div>
		</form>

	</div>
);
}
}

// export default scriptLoader('https://js.stripe.com/v2/')(Checkout);