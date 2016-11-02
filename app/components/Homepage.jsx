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
		<h1 id="header">CASTLESHOPPER</h1>
		<h2 className="row" id="homepage">
			{
				allCastles && allCastles.map(function(castle) {
					return (<span key={castle.id} className="col-xs-6 col-md-3">
							<p>{castle.imageUrl[0]}</p>
					</span>)
				})
			}
		</h2>
	</div>
);