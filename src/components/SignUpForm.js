import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

function SignUpForm() {
  return(
    <div>
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
      />
        <br />
      <RaisedButton 
        label='Facebook'
      />
      <RaisedButton 
        label='Google'
      />
    </div>
  )
}

export default SignUpForm;