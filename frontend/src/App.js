import React, {Component} from 'react';
import './App.css';
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Nav from "./Nav";
import JoblyApi from "./JoblyApi";
import { decode } from "jsonwebtoken";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currUser: null
    };
  }

  async getCurrUser() {
    let token = localStorage.getItem("token");
    try {
      //get username from token
      let {username} = decode(token);

      //grab the record of the user from the server and set state
      let currUser = await JoblyApi.getUser(username);
      this.setState({ currUser });
    }
    catch(e) {
      console.error(e);
    }
  }


  render() {
    return (
      <div className="App">
       
        <BrowserRouter>
          <Nav getCurrUser={this.getCurrUser}/> 
          <Routes getCurrUser={this.getCurrUser} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
