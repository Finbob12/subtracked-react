import React from 'react';
import Header from './Header';
import Account from './Account';
import MySubs from './MySubs';
import NewSub from './NewSub';
import LogIn from './LogIn';
import SignUp from './SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';

const App = () => (
  <Router>
  <Header />
 <Switch>
   {/* <Route exact path="/" component={App} /> */}
   <Route exact path="/new-sub" component={NewSub} />
   <Route exact path="/account" component={Account} />
   <Route exact path="/my-subs" component={MySubs} />
   <Route exact path="/log-in" component={LogIn} />
   <Route exact path="/sign-up" component={SignUp} />
 </Switch>
</Router>
);

export default App;
