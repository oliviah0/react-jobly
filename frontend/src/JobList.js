import React, { Component } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid/v4";
import JobCard from "./JobCard";

class JobList extends Component {
  // static defaultProps = {}

  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    let {jobs} = this.props;
    let output = (
      jobs.map(job => <JobCard job={job}/>)
    );
    return (
      <div>
        {output}
      </div>
    );
  }
}

export default JobList;