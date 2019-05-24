import React, { Component } from "react";
import JoblyApi from "./JoblyApi";
import JobList from "./JobList";

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: { jobs: [] }
    };
    this.apply = this.apply.bind(this);
  }

  /**
   * Gets company from server and set to state
   */
  async componentDidMount() {
    //grab company record from server
    let company = await JoblyApi.getCompany(this.props.match.params.handle);

    // get the current logged in user's jobs applied to for this company
    let userAppliedJobs = this.props.currentUser.jobs;
    let jobsAppliedIds = new Set(userAppliedJobs.map(job => job.id));

    // create a new company jobs list with added indicator if current user applied to job
    let jobs = company.jobs.map(job => (
      jobsAppliedIds.has(job.id)
        ? { ...job, state: "applied" }
        : job
    ));
    
    // update the jobs array in the company and set to state
    company.jobs = jobs;
    this.setState({ company });
  }

  /**
   * Post to server when user applies to a job. Associates username to job id.
   * @param {number} appliedJobId 
   */
  async apply(appliedJobId) {
    let { username } = this.props.currentUser;
    
    // posts to server the user's application and returns message: "applied"
    let message = await JoblyApi.applyForJob(appliedJobId, username);
    
    // create a new company-jobs list with added indicator that current user has applied to job
    let jobs = [...this.state.company.jobs];
    let newJobs = jobs.map(job =>
      job.id === appliedJobId
        ? { ...job, state: message }
        : job
    );

    // update the company-job array in state
    this.setState(st => ({
      company: { ...st.company, jobs: newJobs }
    }));
  }

  render() {
    let { company } = this.state;

    return (
      <div>
        <h1>{company.name}</h1>
        <p>{company.description}</p>
        <JobList jobs={company.jobs} apply={this.apply} />
      </div>
    );
  }
}

export default Company;