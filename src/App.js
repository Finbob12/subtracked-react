import React, { Component } from 'react';
import Header from './components/Header';
import Account from './components/Account';
import MySubs from './components/MySubs';
import NewSub from './components/NewSub';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
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
        axios.get('http://localhost:3001/logged_in', {withCredentials: true})    
        .then(response => {
            if (response.data.logged_in) {
                return this.handleLogin(response)
            } else {
                return this.handleLogout()
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

    redirect = () => {
        this.props.history.push('/')
    }

render() {
    return (
      <div>
            <BrowserRouter>
                <Header
                    handleLogout={this.handleLogout}
                    redirect={this.redirect}
                    state={this.state}
                />
                <Switch>
                    <Route exact path="/new-sub" component={NewSub} />
                    <Route exact path="/account" component={Account} />
                    <Route exact path="/my-subs" component={MySubs} />
                    {/* <Route exact path="/log-in" component={LogIn} handleLogin={this.handleLogin} /> */}
                    {/* <Route exact path="/sign-up" component={SignUp} /> */}

                    <Route exact path="/log-in" render={(props) => <LogIn {...props} handleLogin={this.handleLogin} />} />
                    <Route exact path="/sign-up" render={(props) => <SignUp {...props} handleLogin={this.handleLogin} />} />
                </Switch>
            </BrowserRouter>
        </div>
    );
  }
};

export default App;
