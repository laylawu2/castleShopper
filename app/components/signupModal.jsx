
import React from 'react';
import Login from './Login'
// import signupModal from './signupModal'

import { connect } from 'react-redux';
import {signup} from 'APP/app/reducers/auth'


export const signupModal = ({signup}) => {

    return(
<li>
    <a href="#"><div data-toggle="modal" data-target="#myModal">Sign Up</div></a>
    <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">Sign up below</h4>
                </div>
                <div className="modal-body">
                    <form id="signup-form" onSubmit={evt => {
                    evt.preventDefault()
                    signup(evt.target.firstName.value,evt.target.lastName.value,evt.target.email.value,evt.target.newusername.value,evt.target.newpassword.value).then($(myModal).modal('hide'))
                    }}>
                    <input id="firstname" className="form-control" name="firstName" placeholder="first name" />
                    <input id="lastname" className="form-control" name="lastName" placeholder="last name" />
                    <input id="email" className="form-control" name="email" placeholder="email" />
                    <input id="newusername" className="form-control" name="newusername" placeholder="username" />
                    <input className="form-control" name="newpassword" placeholder="password" type="password" />
                    <input id="signup-button" className="btn btn-default" type="submit" value="Sign up" />
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
</li>
                        
    )

}


export default connect(
    null,
    {signup}
)(signupModal)