'use strict'

import React from 'react';

   
export default () => {

return (
    <div className="container">
        <div className="product">

            <div className="row">

                <div className="col-md-9">

                    <div className="thumbnail">
                        <img className="img-responsive" src="https://goo.gl/images/pJlLvp" alt=""></img>
                        <div className="caption-full">
                            <h4 className="pull-right">$24.99</h4>
                            <h4><a href="#">Product Name</a>
                            </h4>
                            <p><a target="_blank" href=""></a>castle link</p>
                            <p>
                                <strong><a href="">castle description</a>
                                </strong></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
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
