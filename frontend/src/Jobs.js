import React, { Component } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid/v4";
import JoblyApi from "./JoblyApi";
import JobList from "./JobList"
import SearchForm from "./SearchForm"

class Jobs extends Component {
  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    }
   this.getFilteredJobs = this.getFilteredJobs.bind(this) 
  }

  async componentDidMount() {
    let result = await JoblyApi.getJobs();
    this.setState({jobs: result});
  }

  async getFilteredJobs(query){
    let result = await JoblyApi.getFilteredJobs(query);
    this.setState({jobs: result})
  }

  render() {
    let {jobs} = this.state;
    return (
      <div>
       <SearchForm handleSearch = {this.getFilteredJobs}/>  
       <JobList jobs={jobs}/>
      </div>
    );
  }
}

export default Jobs;