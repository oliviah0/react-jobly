import React, { Component } from "react";
import JoblyApi from "./JoblyApi";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeView: "login"
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.toggleLoginView = this.toggleLoginView.bind(this);
    this.toggleSignupView = this.toggleSignupView.bind(this);

  }


  toggleView(view) {
    this.setState({ activeView: view });
  }

  toggleLoginView() {
    this.toggleView("login");
  }

  toggleSignupView() {
    this.toggleView("signup");
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

    let form = this.state.activeView === "login" ? <LoginForm handleLogin={this.handleLogin} /> : <SignUpForm handleSignUp={this.handleSignUp} />
    return (
      <div>
        <div className="Login">
          <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            <div className="d-flex justify-content-end">
              <div className="btn-group">
                <button
                  // className={`btn btn-primary ${loginActive ? "active" : ""} `}
                  className={`btn btn-primary`}
                  onClick={this.toggleLoginView}
                >
                  Login
              </button>
                <button
                  // className={`btn btn-primary ${loginActive ? "" : "active"} `}
                  className={`btn btn-primary`}
                  onClick={this.toggleSignupView}
                >
                  Sign up
              </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          {form}
        </div>
      </div>

    );
  }
}

export default Login;