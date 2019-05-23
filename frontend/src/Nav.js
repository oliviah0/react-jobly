import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {

    let navLinks = (
      <div className="navbar-nav">
        <Link to="/companies" className="nav-item nav-link">Companies</Link>
        <Link to="/jobs" className="nav-item nav-link" >Jobs</Link>
        <Link to="/profile" className="nav-item nav-link">Profile</Link>
        <Link to="login" className="nav-item nav-link">Login</Link>
        <Link to="/" className="nav-item nav-link" onClick={this.props.handleLogout}>Logout</Link>
      </div>
    );

    if (!this.props.currentUser) {
      navLinks = (
        <div className="navbar-nav">
          <Link to="login" className="nav-item nav-link">Login</Link>
        </div>
      );
    }

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">Jobly</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {navLinks}
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;

