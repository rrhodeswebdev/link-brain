import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

function SignUpForm() {
  return(
    <div>
      <Paper className='form-paper' zDepth={2}>
        <TextField 
          floatingLabelText='Username'
        />
          <br />
        <TextField 
        floatingLabelText='Email'
        type='email'
        />
          <br />
        <TextField 
        floatingLabelText="Password"
        type="password"
        />
          <br />
        <RaisedButton
          label='Sign Up'
          className='sign-btn'
        />
          <br />
        <RaisedButton 
          label='Facebook'
          className='social-sign-btn'
        />
        <RaisedButton 
          label='Google'
          className='social-sign-btn'
        />
      </Paper>
    </div>
  )
}

export default SignUpForm;