import React, { Component } from "react";
// import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   ###: "",
    // };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.add###({ this.state });
    // this.props.history.push("/somewhere");
  }

  render() {
    return (
      <div>
        LOGIN FORM
        {/* <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="###">###label###</label>
            <input name="###" id="###" onChange={this.handleChange} value={this.state.###} />
          </div>
          <button type="Submit" value="Add this color" readOnly />
        </form> */}
      </div>
    );
  }
}

export default Login;