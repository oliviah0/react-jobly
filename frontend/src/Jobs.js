import React, { Component } from "react";
import "./Jobs.css";
import JoblyApi from "./JoblyApi";
import JobList from "./JobList";
import SearchForm from "./SearchForm";

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    };
    this.getFilteredJobs = this.getFilteredJobs.bind(this);
    this.apply = this.apply.bind(this)
  }

  //when initially accessing page, grabs all jobs from server and sets state
  async componentDidMount() {
    let jobs = await JoblyApi.getJobs();
    this.setState({ jobs });
  }

  //grab filtered list of jobs based on search item
  async getFilteredJobs(query) {
    let jobs = await JoblyApi.getFilteredJobs(query);
    this.setState({ jobs });
  }

  async apply(appliedJobId) {
    let username = this.props.currentUser.username
    let message = await JoblyApi.applyForJob(appliedJobId, username)
  
    this.setState(st => ({
      jobs: st.jobs.map(job => 
         job.id === appliedJobId 
         ? {...job, state: message}
         : job
        )
    }))
  }


  render() {
    let { jobs } = this.state;
    return (
      <div>
        <div className="jobsWrap">
          <SearchForm handleSearch={this.getFilteredJobs} />
          <JobList jobs={jobs} apply={this.apply}/>
        </div>
      </div>
    );
  }
}

export default Jobs;