import React, { Component } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid/v4";
import CompanyCard from "./CompanyCard";

class CompanyList extends Component {
  // static defaultProps = {}

  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    let {companies} = this.props;
    let output = (
      companies.map(company => <CompanyCard company={company}/>)
    );
    return (
      <div>
        {output}
      </div>
    );
  }
}

export default CompanyList;