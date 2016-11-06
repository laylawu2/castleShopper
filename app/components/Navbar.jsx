import React from 'react';
import Login from './Login'
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
                                    <li><a href="#">Fictional</a></li>
                                    <li><a href="#">Price Ascending</a></li>
                                    <li><a href="#">Price Descending</a></li>
                                    <li className="divider"></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Sign Up</a></li>
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
        </div>)
};

