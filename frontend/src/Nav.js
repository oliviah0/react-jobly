import React, { Component } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid/v4";

class Nav extends Component {

  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Jobly</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to="/companies" class="nav-item nav-link">Companies</Link>
              <Link to="/jobs" class="nav-item nav-link" >Jobs</Link>
              <Link to="/profile" class="nav-item nav-link">Profile</Link>
              <Link to="login" class="nav-item nav-link">Login</Link>
              <Link to="/" class="nav-item nav-link">Logout</Link>
            </div>
          </div>
        </nav>

      </div>
    );
  }
}

export default Nav;

