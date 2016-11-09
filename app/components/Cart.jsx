import React from 'react';
import { FormattedNumber } from 'react-intl';

export default ({ cart }) => (
	<div className="container">
		<h1>Cart</h1>
		<div className="col-lg-10 cart-products">
			<div className="row cart-product">
				<img className="col-lg-4" src="http://www.castles.org/images/sd6_small.jpg"/>
				<div className="col-lg-8">
					<h3 className="product-title">New Castle</h3>
					<div className="col-lg-6">
						<ul className="product-details">
							<li className="product-attribute">Size: 20 sqft</li>
							<li className="product-attribute">Location: Europe</li>
							<li className="product-attribute">Snippit: This is a great castle...</li>
						</ul>
					</div>
					<div className="col-lg-6">
						<p className="product-price">Price: <FormattedNumber value={500000000} style="currency" currency="EUR" /></p>
						<button className="btn btn-danger">REMOVE</button>
					</div>
				</div>
				
			</div>
			<div className="row cart-product">
				<img className="col-lg-4" src="http://www.castles.org/images/sd6_small.jpg"/>
				<div className="col-lg-8">
					<h3 className="product-title">New Castle</h3>
					<div className="col-lg-6">
						<ul className="product-details">
							<li className="product-attribute">Size: 20 sqft</li>
						</ul>
					</div>
					<div className="col-lg-6">
						<p className="product-price">Price: <FormattedNumber value={500000000} style="currency" currency="EUR" /></p>
						<button className="btn btn-danger">REMOVE</button>
					</div>
				</div>
				
			</div><div className="row cart-product">
				<img className="col-lg-4" src="http://www.castles.org/images/sd6_small.jpg"/>
				<div className="col-lg-8">
					<h3 className="product-title">New Castle</h3>
					<div className="col-lg-6">
						<ul className="product-details">
							<li className="product-attribute">Size: 20 sqft</li>
						</ul>
					</div>
					<div className="col-lg-6">
						<p className="product-price">Price: <FormattedNumber value={500000000} style="currency" currency="EUR" /></p>
						<button className="btn btn-danger">REMOVE</button>
					</div>
				</div>
				
			</div>
			{/*
				cart.map((item) => (
					<div className="row cart-product">
						<img className="col-lg-4" src="http://www.castles.org/images/sd6_small.jpg"/>
						<div className="col-lg-8">
							<h3 className="product-title">{ item.name }</h3>
							<div className="col-lg-6">
								<ul className="product-details">
									{ Object.keys(item.amenities).map((amenity) => (
										<li className="product-amenity">{ amenity }:  { item.amenities[amenity] }</li>
										))
									}
								</ul>
							</div>
							<div className="col-lg-6">
								<button className="btn btn-danger">REMOVE</button>
								<p className="product-price">Price: 
									<FormattedNumber value={ item.price } style="currency" currency="USD" />
								</p>
							</div>
						</div>
					</div>
				))
			*/}
		</div>
		<div className="col-lg-2 cart-summary">
			<div className="row">
				<h3>Total: <FormattedNumber value={500000000} style="currency" currency="EUR" /></h3>
				<button className="btn btn-primary">Checkout</button>
			</div>
		</div>
	</div>
);