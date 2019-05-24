import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import CurrentUserContext from "./CurrentUserContext";

class Home extends Component {
  static contextType = CurrentUserContext;
  
  render() {
    let home = (
      <div className="home">
        <p>WELCOME HOME</p>
        <Link to="/login">
          <button className="btn btn-primary btn-lg btn-style">
            Login
          </button>
        </Link>
      </div>
    );

    if (this.context) {
      home = `WELCOME BACK ${this.context.first_name}`;
    }

    return (
      <div className="home-style">
        {home}
      </div>
    );
  }
}

export default Home;