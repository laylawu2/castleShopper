import React from 'react';
import { MONTHS, YEARS } from './constants';

export default ({ }) => (
	<div className="form-group payment-info">
		<h3>Payment Information</h3>
		<div className="row">
			<div className="col-lg-8">
				<input name="card-number" type="text" className="form-control" placeholder="Card number"/>
			</div>
			<img className="col-lg-4 col-md-4 col-sm-12" width="auto" height="20px" src="http://help.busbud.com/hc/en-us/article_attachments/202072663/Visa_Mastercard_Discover_and_AMEX_logo.jpg"  alt="visa-mastercard-discover-amex" />
		</div>
		<div className="row">
			<div className="col-lg-6">
				<div className="row">
					<p className="col-lg-3">Expiration Date</p>
					<div className="col-lg-5">
						<select className="form-control" defaultValue="Month">
						{ MONTHS.map((month) => (
							<option value={ month } key={ month }>{ month }</option>
						))}
						</select>
					</div>
					<div className="col-lg-4">
						<select className="form-control" defaultValue="Day">
						{ YEARS.map((year) => (
							<option value={ year } key={ year }>{ year }</option>

						))}
						</select>
					</div>
				</div>
			</div>
			<div className="col-lg-6">
				<input name="cvc" type="number" className="form-control" placeholder="CVC" />
			</div>
		</div>
	</div>
);
