import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {

  render() {
    return (
      <div>
        <p>WELCOME HOME</p>
        <Link to="/login"><button className="btn btn-primary">Login</button></Link>
      </div>
    );
  }
}

export default Home;