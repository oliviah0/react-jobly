import React, { Component } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import LoginForm from "./LoginForm";
import Profile from "./Profile";

import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Switch>
        <Route exact path="/login" render={props => <Login {...props}/>} />
        <Route exact path="/companies/:handle" render={props => <Company {...props} />} />
        <Route exact path="/companies" render={props => <Companies {...props}/>} />
        <Route exact path="/jobs" render={props => <Jobs {...props}/>} />
        <Route exact path="/profile" render={props => <Profile {...props} />} />
        <Route exact path="/" render={() => <Home />} />
        <Redirect to="/" />
      </Switch>
    );
  }
}
export default Routes;