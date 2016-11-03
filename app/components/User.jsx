import React from 'react';
export default class User extends React.Component {
  render() {
    return(
      <div className="container-fluid">
        <div className='row'>
          <div className='col-xs-3 offset-col-xs-2'>
            <h3>Grace Hopper</h3>
            <img className='img-rounded' src="http://cecomhistorian.armylive.dodlive.mil/files/2012/03/28-hopper.jpg" height='300'/>
            <button className='btn btn-info btn-block'>Edit Profile</button>
            <button className='btn btn-info btn-block'>Anything</button>
          </div>
          <div className='col-xs-7'>
            <dl className="dl-horizontal">
              <dt>First Name</dt>
                <dd>Grace</dd>
              <dt>Last Name</dt>
                <dd>Hopper</dd>
              <dt>Address</dt>
                <dd></dd>
              <dt>Last Name</dt>
                <dd>Hop</dd>
            </dl>
          </div>
        </div>
      </div>
    )
  }
}
