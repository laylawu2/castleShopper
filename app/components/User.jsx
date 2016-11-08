import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

// <Dropdown>
//                 <DropdownTrigger>Profile</DropdownTrigger>
//                 <DropdownContent>
//                     <img src="avatar.jpg" /> Username
//                     <ul>
//                         <li>
//                             <a href="/profile">Profile</a>
//                         </li>
//                         <li>
//                             <a href="/favorites">Favorites</a>
//                         </li>
//                         <li>
//                             <a href="/logout">Log Out</a>
//                         </li>
//                     </ul>
//                 </DropdownContent>
//             </Dropdown>

export default class User extends React.Component {

  constructor(){
    super();
    this.state = {bids: []};
  }

  componentDidMount(){
     const {user} = this.props;
      // console.log("USERINCOMPONENTDIDMOUNT", this.props.user)
    
  }


  render() {
      const {user, userBids} = this.props;
      let bids = [];
      console.log("USERBIDS", this.props.userBids)
      // if(this.props.user){
      //   axios.get(`/api/bids/user/${user.id}`)
      //     .then(userBids => {
      //       console.log("BIDS FOR THIS", this.state.bids)
      //     })
      // }

    return(
      <div className="container-fluid">
      {
        user ? 
        
          <div className='row'>
            <div className='col-lg-12'>
              <div className='col-lg-4 col-lg-offset-2'>
                <h3 className='username'>{user.fullName + " AKA " + user.username}</h3>
              </div>
            </div>
              <div className='col-lg-3 col-lg-offset-2'>
                <img className='img-rounded img-responsive user-profile-img' src="https://d1p42fqrbwqdsw.cloudfront.net/campaigns/organizer_images/000/034/606/original/open-uri20151114-3-nmppkb?1447509146" height='200'/>
                <button className='btn btn-info btn-block'>Edit Profile</button>
              </div>
              <div className='col-lg-6'>
                  <div className="panel-group col-lg-8 col-lg-offset-2">

                    <div className="panel panel-default">
                    
                      <div className="panel-heading">Bids</div>
                      <div className="panel-body"><a href='#'>My Bid History</a></div>
                      <div className="panel-body">
                      {
                        userBids && userBids.castles.map((castle) => {
                          return (
                            <div key={castle.id}>{
                                castle.bids.map((bid, i) => {
                                  return (
                                    <div key={i}>
                                    <Link to={`/castles/${castle.id}`}>
                                      <div>{castle.name}</div>
                                    </Link>
                                      <div>{bid.bidPrice}</div>
                                    </div>
                                  )
                                })
                            }</div>
                          )
                        })
                      }
                      
                      </div>
                  
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

        : 

        <div className="container">
          <button className="btn btn-lg btn-warning">
            <span className="glyphicon glyphicon-refresh glyphicon-refresh-animate">
            </span> Loading...
          </button>
        </div>
      }
    </div>
    )
  }
}
