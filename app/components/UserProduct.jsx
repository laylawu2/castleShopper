import React from 'react';
export default class User extends React.Component {
  render() {
    return(
      <div className="container-fluid">
        <div className='row'>
          <div className='col-lg-12'>
            <div className='col-lg-4 col-lg-offset-2'>
              <h3 className='username'>My Listings</h3>
            </div>
          </div>

            <div className='col-lg-12'>
                <div className="panel-group col-lg-8 col-lg-offset-2">
                  <div className="panel panel-default">
                    <div className="panel-heading">Orders</div>
                    <div className="panel-body"><a href='#'>My Order History</a></div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">Bids</div>
                    <div className="panel-body"><a href='#'>My Bid History</a></div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">Likes</div>
                    <div className="panel-body"><a href='#'>My Like History</a></div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading">Account</div>
                    <div className="panel-body"><a href='#'>Change My Account Setting</a></div>
                  </div>
              </div>

            </div>
        </div>
      </div>
    )
  }
}