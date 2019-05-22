import React, { Component } from "react";
//import { Link } from "react-router-dom";
//import uuid from "uuid/v4";
import "./Companies.css";
import JoblyApi from "./JoblyApi";
import CompanyList from "./CompanyList";
import SearchForm from "./SearchForm"

class Companies extends Component {
  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      companies: []
    };
    this.getFilteredCompanies = this.getFilteredCompanies.bind(this)
  }

  async componentDidMount() {
    let result = await JoblyApi.getCompanies();
    this.setState({companies: result});
  }

  async getFilteredCompanies(query) {
    let result = await JoblyApi.getFilteredCompanies(query);
    this.setState({companies: result});
  }



  render() {
    let {companies} = this.state;
    return (
      <div>
        <div className="wrap">
        <SearchForm handleSearch = {this.getFilteredCompanies}/>
        <CompanyList companies={companies}/>
        </div>
      </div>
    );
  }
}

export default Companies;