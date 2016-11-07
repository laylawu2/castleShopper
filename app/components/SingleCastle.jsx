'use strict'

import React from 'react';
import axios from 'axios';

//if user is not logged in, show: log in to bid! 
//if user is logged in: 
    //if there are no bids on this castle yet, show no bids! 
    //if there are bids on this castle, show the highest one 
    //if the user has already bid on this castle, tell them 
        //you've already bid! and show previous highest bid 

// export const addCastle = (castleInfo) => dispatch => {
//   //console.log('dispatchers', castleInfo)
//   axios.post('/api/castles', castleInfo)
//     .then(res => {
//       console.log('inside dispatcher post', res.data)
//       dispatch(create(res.data))
//     })
//     .catch(console.error)
// }

axios(`/api/bids/user/${user.id}/castle/${castle.id}`, bidPrice)


   
export default ({oneCastle}) => {
    console.log("CASTLE", oneCastle);
return (
    <div className="container" id="castle-container">
        <div className="product">

            <div className="row">

                <div className="col-md-9">

                    <div className="thumbnail">
                        <img className="img-responsive" src='http://www.photographyblogger.net/wp-content/uploads/2009/05/castle10.jpg' alt=""></img>
                        <div className="caption-full">
                            <h4 className="pull-right">${oneCastle.price}</h4>
                            <h4><a href="#">{oneCastle.name}</a>
                            </h4>
                            <p><a target="_blank" href=""></a>{oneCastle.location}</p>
                            <p>
                                <strong><a href="">A History of {oneCastle.name}</a>
                                </strong></p>
                            <p>{oneCastle.description}</p>
                        </div>
                        <div className="bid-section">
                            <div class="form-group">
                                <input type="text" class="form-control" id="usr">
                                
                                </input>
                            </div>
                        </div>
                        <div className="ratings">
                            <p className="pull-right">3 reviews</p>
                            <p>
                                <span className="glyphicon glyphicon-star"></span>
                                <span className="glyphicon glyphicon-star"></span>
                                <span className="glyphicon glyphicon-star"></span>
                                <span className="glyphicon glyphicon-star"></span>
                                <span className="glyphicon glyphicon-star-empty"></span>
                                4.0 stars
                            </p>
                        </div>
                    </div>

                    <div className="well">

                        <div className="text-right">
                            <a className="btn btn-success">Leave a Review</a>
                        </div>

                        <hr></hr>

                        <div className="row">
                            <div className="col-md-12">
                                <span className="glyphicon glyphicon-star"></span>
                                <span className="glyphicon glyphicon-star"></span>
                                <span className="glyphicon glyphicon-star"></span>
                                <span className="glyphicon glyphicon-star"></span>
                                <span className="glyphicon glyphicon-star-empty"></span>
                                Anonymous
                                <span className="pull-right">10 days ago</span>
                                <p>This product was great in terms of quality. I would definitely buy another!</p>
                            </div>
                        </div>

                        <hr></hr>

                        <div className="row">
                            <div className="col-md-12">
                                <span className="glyphicon glyphicon-star"></span>
                                <span className="glyphicon glyphicon-star"></span>
                                <span className="glyphicon glyphicon-star"></span>
                                <span className="glyphicon glyphicon-star"></span>
                                <span className="glyphicon glyphicon-star-empty"></span>
                                Anonymous
                                <span className="pull-right">12 days ago</span>
                                <p>I've alredy ordered another one!</p>
                            </div>
                        </div>

                        <hr></hr>

                        <div className="row">
                            <div className="col-md-12">
                                <span className="glyphicon glyphicon-star"></span>
                                <span className="glyphicon glyphicon-star"></span>
                                <span className="glyphicon glyphicon-star"></span>
                                <span className="glyphicon glyphicon-star"></span>
                                <span className="glyphicon glyphicon-star-empty"></span>
                                Anonymous
                                <span className="pull-right">15 days ago</span>
                                <p>I've seen some better than this, but not at this price. I definitely recommend this item.</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

        <div className="copyright">

            <hr></hr>

            <footer>
                <div className="row">
                    <div className="col-lg-12">
                        <p>Copyright &copy; Your Website 2014</p>
                    </div>
                </div>
            </footer>

        </div>
    </div>
    )
}
