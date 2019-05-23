import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {

  render() {
    let home = (
      <div>
        <p>WELCOME HOME</p>
        <Link to="/login"><button className="btn btn-primary">Login</button></Link>
      </div>
    );

    if (this.props.currentUser) {
      home = `WELCOME BACK ${this.props.currentUser.first_name}`;
    }

    return (
      <div>
        {home}
      </div>
    );
  }
}

export default Home;