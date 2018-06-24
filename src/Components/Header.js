import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">
                                <div className="row new">
                                    <div className="col-md-4">
                                        <div className="title">Random</div>
                                    </div>
                                    <div className="col-md-1">User</div>
                                </div>
                            </a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="/">Generate New User</a></li>
                        </ul>
                    </div>
                </nav>

            </div>
        );
    }
}

export default Header;
