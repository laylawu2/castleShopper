import React from 'react';
import Navbar from './Navbar'
import Star from './Star'
export default ({allCastles}) => (
	<div className="home" id="homepage-main">
		<Navbar />
		<h1 id="header">CASTLESHOPPER</h1>
		<div className="row" id="homepage">
			{
				allCastles && allCastles.map(function(castle) {
					return (
						<div key={castle.id} className="col-xs-6 col-md-3">
							<a href="#" className="img-thumbnail" id="castle-photo">
							<img src="http://akns-images.eonline.com/eol_images/Entire_Site/2016225/rs_300x300-160325124422-300-wizarding-world-of-harry-potter-hollywood.jm.32516.jpg" />
							</a>
							<p className="description" id="castle-title">{castle.name}</p>
							<p>{castle.description}</p>
							<Star />
						</div>
					)
				})
			}
		</div>
	</div>
);