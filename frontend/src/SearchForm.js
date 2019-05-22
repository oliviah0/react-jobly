import React, { Component } from "react";
// import "./SearchForm.css";

class SearchForm extends Component {
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
        <form onSubmit={this.handleSubmit}>
          <div>
            <input name="search" id="search" onChange={this.handleChange} value={this.state} />
          </div>
          <button type="Submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;