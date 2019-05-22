import React, { Component } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid/v4";
import "./JobCard.css";

class JobCard extends Component {
  // static defaultProps = {}

  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    let { job } = this.props;
    return (
      <div>
       <div className="jobCard my-2">
            <div className="card-body">
              <h3 className="card-title">{job.title}</h3>
              <p className="card-text">Salary: ${job.salary}</p>
              <p className="card-text">Equity: {job.equity}</p>
              <button className="btn btn-danger">Apply</button>
            </div>
        </div>
      </div>
    );
  }
}

export default JobCard;