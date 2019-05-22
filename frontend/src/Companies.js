import React, { Component } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid/v4";
import JoblyApi from "./JoblyApi";
import CompanyList from "./CompanyList";

class Companies extends Component {
  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      companies: []
    };
  }

  async componentDidMount() {
    let response = await JoblyApi.getCompanies();
    this.setState({companies: response});
  }


  render() {
    let {companies} = this.state;
    return (
      <div>
        <CompanyList companies={companies}/>
      </div>
    );
  }
}

export default Companies;