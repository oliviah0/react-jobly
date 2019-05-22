import React, { Component } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid/v4";
import JobCard from "./JobCard";

class JobList extends Component {
  render() {
    let { jobs } = this.props;
    let output = (
      jobs.map(job => <JobCard key={job.id} job={job} />)
    );
    return (
      <div>
        {output}
      </div>
    );
  }
}

export default JobList;