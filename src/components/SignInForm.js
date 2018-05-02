import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';

function SignInForm() {
  return(
    <div className='sign-forms'>
      <Paper className='form-paper' zDepth={2}>
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
          className='sign-btn'
          backgroundColor='#42A5F5'
          labelColor='#FAFAFA'
        />
          <p style={{color: '#9E9E9E', fontSize: '14px', paddingBottom: '10px'}}><em>Or sign in using...</em></p>
        <RaisedButton 
          label='Facebook'
          className='social-sign-btn'
          backgroundColor='#4267B2'
          labelColor='#FAFAFA'
          icon={<FontIcon style={{fontSize: '1.2em', marginRight: '5px'}} className='fab fa-facebook-f fa-xs' />}
        />
        <RaisedButton 
          label='Google'
          className='social-sign-btn'
          backgroundColor='#EA4335'
          labelColor='#FAFAFA'
          icon={<FontIcon style={{fontSize: '1.2em', marginRight: '5px'}} className='fab fa-google fa-xs' />}
        />
        <p style={{color: '#9E9E9E', fontSize: '14px', paddingBottom: '40px'}}><em>Need to register? Sign up <a href='./sign-up'>here</a></em></p>
      </Paper>
    </div>
  )
}

export default SignInForm;