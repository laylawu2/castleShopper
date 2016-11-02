import React from 'react';
export default ({allCastles}) => (
	<div className="home">
		<nav className="navbar navbar-default navbar-static-top" id="navigation">
			<div className="container-fluid">
				<div className="navbar-header">
					<ul className="nav nav-pills">
						<li role="presentation"><a href="#">Sign in</a></li>
					</ul>
				</div>
			</div>
		</nav>
		<div id="header">CASTLESHOPPER</div>
		<div className="row" id="homepage">
			{
				allCastles && allCastles.map(function(castle) {
					return (<div key={castle.id} className="col-xs-6 col-md-3">
							<a href="#" className="img-thumbnail" id="castle-photo">
				<img src="http://akns-images.eonline.com/eol_images/Entire_Site/2016225/rs_300x300-160325124422-300-wizarding-world-of-harry-potter-hollywood.jm.32516.jpg" />
				</a>
				<p className="description" id="castle-title">{castle.name}</p>
				<p>{castle.description}</p>
					</div>)
				})
			}
		</div>
	</div>
);