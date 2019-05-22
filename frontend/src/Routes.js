import React, { Component } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import Home from "./Home"
import Login from "./Login"
import Profile from "./Profile"

import Companies from "./Companies"
import Company from "./Company"
import Jobs from "./Jobs"

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (

      <Switch>
        <Route exact path="/login" render={() => <Login />} />
        <Route exact path="/companies/:handle" render={() => <Company />} />
        <Route exact path="/companies" render={() => <Companies />} />
        <Route exact path="/jobs" render={() => <Jobs />} />
        <Route exact path="/profile" render={() => <Profile />} />
        <Route exact path="/" render={() => <Home />} />
        <Redirect to="/" />
      </Switch>

    );
  }
}
export default Routes;