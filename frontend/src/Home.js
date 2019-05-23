import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {

  render() {
    let home = (
      <div>
        <p style={{fontSize:"43px"}}>WELCOME HOME</p>
        <Link to="/login"><button className="btn btn-primary">Login</button></Link>
      </div>
    );

    if (this.props.currentUser) {
      home = `WELCOME BACK ${this.props.currentUser.first_name}`;
    }

    return (
      <div className="home-style">
        {home}
      </div>
    );
  }
}

export default Home;