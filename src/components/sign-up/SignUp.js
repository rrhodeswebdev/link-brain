import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signUpUser } from '../../actions/userActions';
import SignUpForm from './SignUpForm';

class SignUp extends Component {
  signUpUser(user) {
    this.props.signUpUser(user)
  }

  render() {
    if(window.localStorage.getItem('token')) {
      return <Redirect to='/dashboard' />
    }
    return(
      <SignUpForm onSubmit={values => this.signUpUser(values)} />
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user
})

export default connect(mapStateToProps, { signUpUser })(SignUp);
