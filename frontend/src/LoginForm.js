import React, { Component } from "react";
// import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleLogin(this.state);
    // this.props.history.push("/");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input 
            type="text"
            name="username" 
            className="form-control" 
            id="username" 
            placeholder="Enter username"
            onChange={this.handleChange}
            value={this.state.username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password"
            className="form-control" 
            id="password" 
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
        
export default Login;