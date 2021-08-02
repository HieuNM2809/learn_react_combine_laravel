import React from 'react';
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Register extends React.Component {
    render() {
        return (
            <>
                 <div className="container login-container-register ">
                    <div className="row">
                        <div className="col-md-6 login-form-1">
                            <h3>Register</h3>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Your Name *"  />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Your Email *"  />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Your Password *"  />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Your Password Again *"  />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Your BirthDay *"  />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Your Sex *"  />
                                </div>
                                <div className="form-group ">
                                    <Link to='/login' className="btnSubmit" >Register</Link>
                                    {/* <Link to={{pathname: 'abc', state: { title: 'this is title' }}}></Link> */}
                                </div>
                                <div className="form-group">
                                    <a href="#" className="ForgetPwd">Forget Password?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Register;