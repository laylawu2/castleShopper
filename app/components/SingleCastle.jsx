'use strict'

import React from 'react';
import axios from 'axios';
import { FormattedNumber } from 'react-intl';

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

// axios(`/api/bids/user/${user.id}/castle/${castle.id}`, bidPrice)

   
export default class SingleCastle extends React.Component {

    constructor(){
        super();
        this.state = {value: '', bidsForThisCastle: null };
        this.onBid = this.onBid.bind(this);
        this.onBidSubmit = this.onBidSubmit.bind(this);
    }
    
    componentDidMount() {
        // this.props.addBid(1000);
        // this.props.addBid(2000);
        // console.log("THIS CASTLE", this.props.oneCastle.id)
        this.props.addBid([]);
        // axios.get(`/api/bids/castle/${this.props.oneCastle.id}`)
        //     .then(bids => {
        //         console.log("BIDS FOR THIS", bids)
        //         this.setState({bidsForThisCastle: bids})
        //     })


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
//     console.log("CASTLE", this.props.oneCastle.id);
//     console.log("ADDBID", this.props.addBid);
//     console.log("NEWBID", this.props.highestBid);
//     console.log("THISPROPS", this.props)
//     console.log("USER", this.props.user);

    const {oneCastle, highestBid, addBid, user} = this.props;



    return (
        <div className="container" id="castle-container">
            <div className="product">

                <div className="row">

                    <div className="col-md-9">

                        <div className="thumbnail">
                            <img className="img-responsive" src='http://www.photographyblogger.net/wp-content/uploads/2009/05/castle10.jpg' alt=""></img>
                            <div className="caption-full">
                                <h4 className="pull-right"><FormattedNumber value={oneCastle.price} style="currency" currency="EUR" /></h4>
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
                                        // <button 
                                        //     type="button" 
                                        //     className="btn btn-success"
                                        //     data-toggle="tooltip" data-placement="top" 
                                        //     title="Log in to place a bid"
                                        // >
                                        // Sign In
                                        // </button>

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
}