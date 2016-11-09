import React from 'react';
import ReactScriptLoaderMixin from 'react-script-loader';

// var ReactScriptLoaderMixin = require('react-script-loader').ReactScriptLoaderMixin;

export default class PaymentForm extends React.Components {

	state = {
		stripeLoading: true,
		stripeLoadingError: false,
	    submitDisabled: false,
	    paymentError: null,
	    paymentComplete: false,
	    token: null
	}
	getScriptURL() {
		return 'https://js.stripe.com/v2/';
	}
	onScriptLoaded() {
		if(!PaymentForm.getStripeToken) {
			Stripe.setPublishableKey('pk_test_L8JDZOz4L1mdNBEfgfQETC7V');
	    	this.setState({ stripeLoading: false, stripeLoadingError: false });
		}
	}
	onScriptError() {
		this.setState({
			stripeLoading: false,
			stripeLoadingError: true
		})
	}
	onSubmit(event) {
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
	render() {
		if(this.state.stripeLoading) {
			return <div>Loading</div>;
		} else if(this.state.stripeLoadingError) {
			return <div>Error</div>;
		} else {
			return (
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
			</form>)
		}
	}
}