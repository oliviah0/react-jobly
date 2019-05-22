import React, { Component } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid/v4";

class CompanyCard extends Component {
  render() {
    let { company } = this.props;
    let companyPage = `/companies/${company.name}`;
    return (
      <div>
        <div className="card">
          <Link to={companyPage}>
            <div className="card-body">
              <h5 className="card-title">{company.name}</h5>
              <p className="card-text">{company.description}</p>
              {/* <img src={company.logo_url} /> */}
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default CompanyCard;