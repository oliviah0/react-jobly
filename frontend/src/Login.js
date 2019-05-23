import React, { Component } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid/v4";
import JoblyApi from "./JoblyApi";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

class Login extends Component {
  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {};
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    
  }

  async handleLogin(data) {
    let token;

    try {
      token = await JoblyApi.login(data);
      this.props.history.push("/");
    }
    catch (e) {
      console.log(e);
    }

    if (token) {
      localStorage.setItem('token', token);
    }
  }


  async handleSignUp(data) {

    let token;

    try {
      token = await JoblyApi.register(data);
      this.props.history.push("/");
    }
    catch (e) {
      console.log(e);
    }

    if (token) {
      localStorage.setItem('token', token);
    }

  }

  render() {
    return (
      <div>
        <LoginForm handleLogin={this.handleLogin} />
        <SignUpForm handleSignUp={this.handleSignUp} />
      </div>
    );
  }
}

export default Login;