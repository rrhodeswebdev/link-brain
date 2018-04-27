import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/sign-in' component={SignIn} />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
