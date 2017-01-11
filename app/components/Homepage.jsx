import React from 'react';
import Navbar from './Navbar';
import Star from './Star';
import { Link } from 'react-router';
import { FormattedNumber } from 'react-intl';

import HomepageContainer from '../containers/HomepageContainer'

export default ({category, allCastles, filter, handleChange, handleChangeCategory}) => (
	<div className="home" id="homepage-main">
		<div className="list-group">
		<div className="form-group">
			<input
				placeholder="Filter castles by name or category"
				className="form-control"
				value={filter}
				onChange={handleChange}
				/>
			</div>
      {
				allCastles && allCastles.map(function(castle) {
					return (
						<div key={castle.id} className="col-xs-6 col-md-3" id="image-div">
							<div id="image-thumbnail">
								<Link  className="thumbnail" to={`/castles/${castle.id}`}>
									<div className="img" style={{ backgroundImage:`url(${castle.imageUrl})` }} />
								</Link>
							</div>
							<p className="description" id="castle-title"><Link to={`/castles/${castle.id}`}>{castle.name}</Link></p>
							<p>{castle.description}</p>
							<p>Current price: <FormattedNumber value={castle.price} style="currency" currency="EUR" /></p>
							<ul id="category-list">
							{
								castle.category ? castle.category.map(function(cat,idx) {
									return (<li key={idx}>{
										(cat + '\n')
										}</li>)
									}) : null
							}
							</ul>


							<Star />
						</div>
					)
				})
			}
    </div>
	</div>
);
