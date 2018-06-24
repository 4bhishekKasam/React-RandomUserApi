import React, { Component } from 'react';
import { MyContext } from './Context';
import './User.css';

class User extends Component {

    render() {
        return (
            <div className="container">
                <MyContext.Consumer>
                    {(context) => (
                        <React.Fragment>
                            <div className="row">
                                <div className="col-md-4">
                                    <img className="rounded-circle" alt="Cinque Terre"
                                        src={context.state.userImage} />
                                </div>
                                <div className="col-md-8">
                                    <p> <b>Name</b> : {context.state.name}   </p>
                                    <p> <b>Gender</b> : {context.state.userData.gender}</p>
                                    <p><b>Email</b> : {context.state.userData.email}</p>
                                    <p><b>Phone No.</b> : {context.state.userData.phone}</p>
                                    <p><b>Age</b> : {context.state.userAge}   </p>
                                </div>
                                <div className="row extra">
                                    <div className="col-md-3">
                                        <div className="collapse" id="collapseExample">
                                          <h4><center><b>Address</b></center></h4>
                                            <p> <b>Street</b> : {context.state.street}   </p>
                                            <p> <b>City</b> : {context.state.city}</p>
                                            <p><b>State</b> : {context.state.state}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row pull-right" >
                                <div className="col-12 details">
                                    <button type="button" className="btn btn-default  btn-lg"
                                        data-toggle="collapse" data-target="#collapseExample"
                                        aria-expanded="false" aria-controls="collapseExample"
                                        id="b1" >Address Details</button>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                    }
                </MyContext.Consumer>


            </div>
        );
    }
}

export default User;
