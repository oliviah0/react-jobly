import React, { Component } from "react";
import JoblyApi from "./JoblyApi";
import JobList from "./JobList";

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: { jobs: [] }
    };
  }

  //grab company from server and set to state
  async componentDidMount() {
    let company = await JoblyApi.getCompany(this.props.match.params.handle);
    this.setState({ company });
  }

  render() {
    let { company } = this.state;
    return (
      <div>
        <h1>{company.name}</h1>
        <p>{company.description}</p>
        <JobList jobs={company.jobs} />
      </div>
    );
  }
}

export default Company;