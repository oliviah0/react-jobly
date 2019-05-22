import React, { Component } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid/v4";
import JoblyApi from "./JoblyApi";
import JobList from "./JobList";

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: { jobs: [] }
    };
  }

  async componentDidMount(){
     let result = await JoblyApi.getCompany(this.props.match.params.handle)
     this.setState({ company: result })
  }


  render() {
    let { company } = this.state
    console.log(this.state.company)
    // let jobs = company.jobs


    return (
      <div>
       <h1>{company.name}</h1>
       <p>{company.description}</p>
       <JobList jobs={company.jobs}/>
      </div>
    );
  }
}

export default Company;