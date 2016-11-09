import React from 'react';
import { STATES, COUNTRIES } from './constants';

export default ({ }) => (
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
);