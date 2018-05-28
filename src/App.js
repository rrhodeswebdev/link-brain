import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import store from './store';

import './App.css';

import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';
import Dashboard from './components/dashboard/Dashboard';

const theme = createMuiTheme( {
  palette: {
    primary: blue,
    secondary: grey,
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MuiThemeProvider theme={theme}>
            <div>
              <Route exact path='/sign-in' component={SignIn} />
              <Route exact path='/sign-up' component={SignUp} />
              <Route path='/dashboard' component={Dashboard} />
            </div>
          </MuiThemeProvider>
        </Router>
      </Provider>
    );
  }
}

export default App;
