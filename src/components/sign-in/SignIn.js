import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signInUser } from '../../actions/userActions';
import SignInForm from './SignInForm';

class SignIn extends Component {
  signInUser(user) {
    this.props.signInUser(user);
  }

  render() {
    if(window.localStorage.getItem('token')) {
      return <Redirect to='/dashboard' />
    }
    return(
      <SignInForm onSubmit={values => this.signInUser(values)} />
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.user
})

export default connect(mapStateToProps, { signInUser })(SignIn);
