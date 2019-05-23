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
    let routes = (
      <Switch>
        <Route exact path="/login" render={props => <Login {...props} />} />
        <Route exact path="/" render={() => <Home currentUser={this.props.currentUser} />} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.currentUser) {
      routes = (
        <Switch>
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route exact path="/companies/:handle" render={props => <Company {...props} currentUser={this.props.currentUser}/>} />
          <Route exact path="/companies" render={props => <Companies {...props} />} />
          <Route exact path="/jobs" render={props => <Jobs {...props} currentUser={this.props.currentUser} />} />
          <Route exact path="/profile" render={props => <Profile {...props} currentUser={this.props.currentUser} />} />
          <Route exact path="/" render={() => <Home currentUser={this.props.currentUser} />} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <div>
        {routes}
      </div>
    );
  }
}
export default Routes;