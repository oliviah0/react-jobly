import React, { Component } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid/v4";
import JoblyApi from "./JoblyApi";
import LoginForm from "./LoginForm";

class Login extends Component {
  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {};
  }

  async login(data) {
    let token;

    try {
      token = await JoblyApi.login(data);
      console.log(token);
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
        <LoginForm handleLogin={this.login} />

      </div>
    );
  }
}

export default Login;