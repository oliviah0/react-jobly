import React, { Component } from "react";
import "./Jobs.css";
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
        <div className="jobsWrap">
       <SearchForm handleSearch = {this.getFilteredJobs}/>  
       <JobList jobs={jobs}/>
       </div>
      </div>
    );
  }
}

export default Jobs;