import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

function SignInForm() {
  return(
    <div>
      <TextField 
        floatingLabelText='Username'
      />
        <br />
      <TextField 
      floatingLabelText="Password"
      type="password"
      />
        <br />
      <RaisedButton
        label='Sign In'
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

export default SignInForm;