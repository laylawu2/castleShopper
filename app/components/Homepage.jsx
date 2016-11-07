import React from 'react';
import Navbar from './Navbar'
import Star from './Star'
import { Link } from 'react-router';

import HomepageContainer from '../containers/HomepageContainer'

export default ({allCastles, filter, handleChange}) => (
	<div className="home" id="homepage-main">
		<div className="form-group">
			<input
				placeholder="Filter castles by name"
				className="form-control"
				value={filter}
				onChange={handleChange}
				/>
			</div>
		<h1 id="header">CASTLESHOPPER</h1>
		<div className="list-group">
      {
				allCastles && allCastles.map(function(castle) {
					return (
						<div key={castle.id} className="col-xs-6 col-md-3" id="image-div">
							<Link className="thumbnail" to={`/castles/${castle.id}`}>
							<img src="http://www.reidsguides.com/images/destinations/europe/germany/baden-wurttemberg/swabia/hohenzollern-thumb.jpg" />
							</Link>
							<p className="description" id="castle-title"><Link to={`/api/castles/${castle.id}`}>{castle.name}</Link></p>
							<p>{castle.description}</p>
							<a href="#" className="category">{ castle.category ? castle.category.map(cat => cat).join(', ') : null }</a>
							<Star />
						</div>
					)
				})
			}
    </div>
	</div>
);


// src={`images/${this.props.image}`}

// {
//         albums.map(album => (
//           <div className="col-xs-4" key={ album.id }>
//             <Link className="thumbnail" to={`/albums/${album.id}`}>
//               <img src={ album.imageUrl } />
//               <div className="caption">
//                 <h5>
//                   <span>{ album.name }</span>
//                 </h5>
//                 <small>{ album.songs.length } songs</small>
//               </div>
//             </Link>
//           </div>
//         ))
//       }