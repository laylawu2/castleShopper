import React from 'react';
import Login from './Login'
import signupModal from './signupModal'

import { connect } from 'react-redux';
// import {login} from 'APP/app/reducers/auth'

export default ({user, logout}) => {
    console.log('user....',user)
        return (
            <div className="container" id="nav-container">

            <div className="row">
                <div id="nav-column" className="col-md-12">
                    <nav className="navbar navbar-default" role="navigation">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><a href="#">Home</a></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Categories <b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Highest ratings</a></li>
                                    <li><a href="#">Price Ascending</a></li>
                                    <li><a href="#">Price Descending</a></li>
                                    <li className="divider"></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">

                            <li data-toggle="modal" data-target="#myModal"><a href="#">Sign Up</a></li>
                                 <li>
                                <div id="myModal" className="modal fade" role="dialog">
                                    <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title">Sign up below</h4>
                                    </div>
                                    <div className="modal-body">
                                        <form id="signup-form">
                                            <input id="firstname" className="form-control" name="firstname" placeholder="first name" />
                                            <input id="lastname" className="form-control" name="lastname" placeholder="last name" />
                                            <input id="newusername" className="form-control" name="newusername" placeholder="username" />
                                            <input className="form-control" name="newpassword" placeholder="password" type="password" />
                                            <input id="signup-button" className="btn btn-default" type="submit" value="signup" />
                                </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>

                                </div>
                                </div>
                            </li>
                            {
                                user ? <ul className="nav navbar-nav">
                            <li className="active"><a onClick={logout} href="#">Sign out</a></li>
                            </ul> : <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Sign in <b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <Login />
                                        </div>
                                    </div>
                                    </li>
                                    <li className="divider"></li>
                                    <li>
                                    <input className="btn btn-primary btn-block" type="button" id="sign-in-google" value="Sign In with Google" />
                                    <input className="btn btn-primary btn-block" type="button" id="sign-in-twitter" value="Sign In with Twitter" />
                                    </li>
                                </ul>
                            </li>
                            }
                            
                        </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        )
};


