import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import SignUp from './components/SignUp';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <Route exact path='/sign-up' component={SignUp} />
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
