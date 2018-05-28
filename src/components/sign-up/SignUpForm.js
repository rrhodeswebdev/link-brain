import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './sign-up.css';

const renderTextField = ({
  input,
  label,
}) => (
  <TextField
    label={label}
    type='string'
    {...input}
  />
);

const renderPassword = ({
  input,
  label,
}) => (
  <TextField
    label={label}
    type='password'
    {...input}
  />
);

class SignUpForm extends Component {
  render() {
    const submit = this.props.handleSubmit(this.props.onSubmit);
    
    return(
      <Paper className = 'sign-up-form'>
        <Field 
            name='username'
            label='Username'
            component={renderTextField}
          />
        <Field 
            name='email'
            label='Email'
            component={renderTextField}
        />
        <Field 
            name='password'
            label='Password'
            component={renderPassword}
        />
        <Button onClick={() => {submit()}} variant="raised" color="primary" className='sign-up-btn'>
          Sign Up
        </Button>
        <p><em>Already have an account? Sign in <a href='/sign-in'>here</a></em></p>
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
  form: 'SignUpForm'
})(SignUpForm);
