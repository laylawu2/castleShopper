
import React from 'react';
import Login from './Login'
// import signupModal from './signupModal'

import { connect } from 'react-redux';
// import {login} from 'APP/app/reducers/auth'

export default ({}) => {

    return(
            <div>
        <div data-toggle="modal" data-target="#myModal"><a href="#">Sign Up</a></div>

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
                                    <div id="myModal" className="modal fade" role="dialog">
                                        <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                            <h4 className="modal-title">Modal Header</h4>
                                        </div>
                                        <div className="modal-body">
                                            <p>Some text in the modal.</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>

                                    </div>
                                    </div>
                                        <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>

                                </div>
                                </div>

                            </div>
    )

}