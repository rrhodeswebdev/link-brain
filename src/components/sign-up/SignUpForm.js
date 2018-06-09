import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import './sign-up.css';

const renderTextField = ({
  input,
  label,
  meta: { touched, error }
}) => (
  <TextField
    margin='normal'
    style={{width: '100%'}}
    label={label}
    type='string'
    required
    helperText={touched && error}
    {...input}
  />
);

const renderPassword = ({
  input,
  label,
  meta: { touched, error }
}) => (
  <TextField
    margin='normal'
    style={{width: '100%'}}
    label={label}
    type='password'
    required
    helperText={touched && error}
    {...input}
  />
);

const validate = values => {
  const errors = {};
  const requiredFields = [ 'username', 'email', 'password' ]

  requiredFields.forEach(field => {
    if(!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if(values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

class SignUpForm extends Component {
  render() {
    const submit = this.props.handleSubmit(this.props.onSubmit);
    
    return(
      <Grid container justify='center' alignItems='center' style={{height: '100vh', backgroundColor: '#ecf0f1'}}>
        <Grid item>
          <Paper className = 'sign-up-form'>
            <Grid item>
              <Typography align='center' variant='display1' style={{padding: '20px 0'}}>
                Create an Account
              </Typography>
            </Grid>
            <Grid item>
              <Field 
                  name='username'
                  label='Username'
                  component={renderTextField}
                />
            </Grid>
            <Grid item>
              <Field 
                  name='email'
                  label='Email'
                  component={renderTextField}
              />
            </Grid>
            <Grid item>
              <Field 
                  name='password'
                  label='Password'
                  component={renderPassword}
              />
            </Grid>
            <Grid item>
              <Button onClick={() => {submit()}} variant="raised" color="primary" style={{margin: '40px 0', width: '100%'}}>
                Sign Up
              </Button>
            </Grid>
            <Grid item>
              <Typography align='center' variant='subheading'>
                Already have an account? Sign in <a href='/sign-in'>here</a>
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

export default reduxForm({
  form: 'SignUpForm', 
  validate
})(SignUpForm);
