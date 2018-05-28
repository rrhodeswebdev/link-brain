import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Field, reduxForm } from 'redux-form';
import './sign-in.css'

const renderTextField = ({
  input,
  label,
}) => (
  <TextField
    label={label}
    type='string'
    {...input}
  />
)

const renderPassword = ({
  input,
  label,
}) => (
  <TextField
    label={label}
    type='password'
    {...input}
  />
)

class SignInForm extends Component {
  render() {
    const submit = this.props.handleSubmit(this.props.onSubmit);
    return(
      <Paper className = 'sign-in-form'>
        <Field
          name='username'
          label='Username'
          component={renderTextField}
        />
        <Field
          name='password'
          label='Password'
          component={renderPassword}
        />
          <Button variant="raised" color="primary" className='sign-in-btn' onClick={() => {submit()}}>
            Sign In
          </Button>
          <p><em>Don't have an account? Sign up <a href='/sign-up'>here</a></em></p>
          <Button variant="raised" color="secondary">
            Facebook
          </Button>
          <Button variant="raised" color="secondary">
            Google
          </Button>
      </Paper>
    )
  }
}

export default reduxForm({
  form: 'SignInForm'
})(SignInForm);