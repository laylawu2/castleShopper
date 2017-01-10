'use strict'

import React from 'react';
import axios from 'axios';
import { Review } from './Review'
//if user is not logged in, show: log in to bid!
//if user is logged in:
    //if there are no bids on this castle yet, show no bids!
    //if there are bids on this castle, show the highest one
    //if the user has already bid on this castle, tell them
        //you've already bid! and show previous highest bid
import { FormattedNumber } from 'react-intl';
import ReviewContainer from '../containers/ReviewContainer'


//if user is not logged in, show: log in to bid!
//if user is logged in:
    //if there are no bids on this castle yet, show no bids!
    //if there are bids on this castle, show the highest one
    //if the user has already bid on this castle, tell them
        //you've already bid! and show previous highest bid


export default class SingleCastle extends React.Component {

    constructor(){
        super();
        this.state = {value: '', bidsForThisCastle: null };
        this.onBid = this.onBid.bind(this);
        this.onBidSubmit = this.onBidSubmit.bind(this);
    }

    componentDidMount() {
        this.props.addBid([]);
    }

    onBid(event){
        this.setState({value: event.target.value});
    }

    onBidSubmit(event){
        const {oneCastle, highestBid, addBid, user} = this.props;
        event.preventDefault();
        console.log("------->", this.state.value)
        const bid = +this.state.value;
        if(bid < highestBid){

            alert('Your bid must be higher than the current highest bid, which is:'
            + highestBid);
        } else {
            const bidPrice = {bidPrice: +this.state.value};
            this.props.addBid(this.state.value);
            axios.post(`/api/bids/user/${user.id}/castle/${oneCastle.id}`, bidPrice)
                .catch(console.error);

            this.setState({value: ''});

        }
    }

render(){

    const {oneCastle, highestBid, addBid, user, reviews, checkout} = this.props;

    return (
        <div className="container" id="castle-container">
            <div className="product">

                <div className="row">

                    <div className="col-md-9">

                        <div className="thumbnail">
                            <img className="img-responsive" src={oneCastle.imageUrl} alt=""></img>
                            <div className="caption-full">
                                <h5 className="pull-right">Suggested Price: <FormattedNumber value={oneCastle.price} style="currency" currency="EUR" /></h5>

                                <h4><a href="#">{oneCastle.name}</a>
                                </h4>
                                <p><a target="_blank" href=""></a>{oneCastle.location}</p>
                                <p>
                                    <strong><a href={oneCastle.historyLink} target="_blank">A History of {oneCastle.name}</a>
                                    </strong></p>
                                <p>{oneCastle.description}</p>
                            </div>
                            <div className="bid-section">
                                <div className="form-group">
                                    {

                                        highestBid.length === 0 ?
                                        <h5>No Bids Yet</h5> :

                                        <h5>Highest Bid: <FormattedNumber value={highestBid} style="currency" currency="EUR" /></h5>
                                    }

                                    <form
                                        onSubmit={this.onBidSubmit}
                                    >
                                        <input type="text"
                                            placeholder={highestBid.length === 0?
                                                "No Bids": "Place Your Bid Here"}
                                            value={this.state.value}
                                            onChange={this.onBid}
                                        />

                                     {
                                         user ?
                                          <button
                                            type="submit"
                                            className="btn btn-success"

                                            value={this.state.value}
                                            >
                                            Place a Bid
                                        </button>
                                        :
                                        <span>
                                            Log in to place a bid
                                        </span>

                                     }

                                    </form>

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
                                {
                                  reviews && reviews.map((review, idx) => (
                                    <div className='row' key={idx}>
                                      <div className='col-lg-2 col-lg-offset-2'>{review.star}</div>
                                      <div className='col-lg-4'>{review.subject}</div>
                                      <div className='col-lg-12 col-lg-offset-2'>{review.content}</div>
                                    </div>
                                  ))
                                }
                            </div> {/*end of rating*/}
                        </div> {/*end of thrumbnail class*/}

                        <Review />


                        </div>

                    </div>

                </div>

            </div>
        )
    }
}
