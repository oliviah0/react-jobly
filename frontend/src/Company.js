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

  //grab company from server and set to state
  async componentDidMount() {
    let company = await JoblyApi.getCompany(this.props.match.params.handle);

    //TODO - grab all the current users jobs applied for this company
    //TODO - then udpate the 'company' and set state
    this.setState({ company });
  }

  //send post to server to apply username to job id
  async apply(appliedJobId) {
    let username = this.props.currentUser.username;
    let message = await JoblyApi.applyForJob(appliedJobId, username);

    let jobs = [...this.state.company.jobs];

    let newJobs = jobs.map(job =>
      job.id === appliedJobId
        ? { ...job, state: message }
        : job
    );

    // update the single job in state to have an applied status indicator
    this.setState(st => ({
      company: {...st.company, jobs: newJobs}
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