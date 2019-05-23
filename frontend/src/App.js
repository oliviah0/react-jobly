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
      currentUser: null
    };

    this.getCurrentUser = this.getCurrentUser.bind(this);
    
  }

  componentDidMount(){
    this.getCurrentUser();
  }

  async getCurrentUser() {
    let token = localStorage.getItem("token");
    try {
      //get username from token
      let {username} = decode(token);

      //grab the record of the user from the server and set state
      let currentUser = await JoblyApi.getUser(username);
      this.setState({ currentUser });
    }
    catch(e) {
      console.error(e);
    }
  }

  handleLogout() {
    localStorage.removeItem('token');
    this.props.history.push("/");
  }


  render() {
    return (
      <div className="App">
       
        <BrowserRouter>
          <Nav currentUser={this.state.currentUser} handleLogout={this.handleLogout}/> 
          <Routes currentUser={this.state.currentUser} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
