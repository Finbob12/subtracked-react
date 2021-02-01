import React, { Component } from 'react';
import Header from './Header';
import Account from './Account';
import MySubs from './MySubs';
import NewSub from './NewSub';
import LogIn from './LogIn';
import SignUp from './SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from 'axios'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }
componentDidMount() {
  this.loginStatus()
}

loginStatus = () => {
  axios.get('http://localhost:3000/logged_in', 
  {withCredentials: true})    
.then(response => {
    if (response.data.logged_in) {
      this.handleLogin(response)
    } else {
      this.handleLogout()
    }
  })
  .catch(error => console.log('api errors:', error))
}
handleLogin = (data) => {
  this.setState({
    isLoggedIn: true,
    user: data.user
  })
}
handleLogout = () => {
  this.setState({
  isLoggedIn: false,
  user: {}
  })
}

render() {
    return (
      <div>
         <BrowserRouter>
         <Header />
          <Switch>
          <Route exact path="/new-sub" component={NewSub} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/my-subs" component={MySubs} />
          <Route exact path="/log-in" component={LogIn} />
          <Route exact path="/sign-up" component={SignUp} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
};

export default App;
