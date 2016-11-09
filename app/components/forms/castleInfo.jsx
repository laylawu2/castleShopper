import React from 'react';
import { FormattedNumber } from 'react-intl';

export default ({ castle }) => (
	<div className="product-info row">
		<img className="col-lg-4" src="http://www.castles.org/images/sd6_small.jpg" />
		<div className="col-lg-8">
			<h3>{ castle.name }</h3>
			<ul className="list-unstyled">
				<li>Description: { castle.checkoutSnippet }</li>
				<li>Size: { castle.size } sqft</li>
				<li>Location: { castle.location }</li>
				<li>Price: <FormattedNumber value={ castle.price } style="currency" currency="USD" /></li>
			</ul>
		</div>
	</div>
);