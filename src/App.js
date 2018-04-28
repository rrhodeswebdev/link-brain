import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import Campaigns from './components/Campaigns';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/sign-in' component={SignIn} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/dashboard/campaigns' component={Campaigns} />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;