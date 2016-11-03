import React from 'react';
export default ({}) => (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
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
                            <li className="active"><a href="http://www.jquery2dotnet.com">Home</a></li>
                            <li className="dropdown">
                                <a href="http://www.jquery2dotnet.com" className="dropdown-toggle" data-toggle="dropdown">Categories <b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li><a href="http://www.jquery2dotnet.com">Fictional</a></li>
                                    <li><a href="http://www.jquery2dotnet.com">Price Ascending</a></li>
                                    <li><a href="http://www.jquery2dotnet.com">Price Descending</a></li>
                                    <li className="divider"></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="navbar-form navbar-left" role="search">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search" />
                            </div>
                            <button type="submit" className="btn btn-default">Search</button>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="http://www.jquery2dotnet.com">Sign Up</a></li>
                            <li className="dropdown">
                                <a href="http://www.jquery2dotnet.com" className="dropdown-toggle" data-toggle="dropdown">Sign in <b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    <li>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <form className="form" role="form" method="post" action="login" acceptCharset="UTF-8" id="login-nav">
                                                <div className="form-group">
                                                <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                                                <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Email address" required />
                                                </div>
                                                <div className="form-group">
                                                <label className="sr-only" htmlFor="exampleInputPassword2">Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" required />
                                                </div>
                                              {/*
                                                  <div className="checkbox">
                                                <label>
                                                <input type="checkbox"> Remember me</input>
                                                </label>
                                                </div>
                                                <div className="form-group">
                                                <button type="submit" className="btn btn-success btn-block">Sign in</button>
                                                </div>
                                                  */}  
                                            </form>
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
                        </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
);