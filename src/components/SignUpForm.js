import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import { Field, reduxForm } from 'redux-form';

class SignUpForm extends Component() {
  renderUsername() {
    return(
      <TextField 
        floatingLabelText='Username'
      />
    )
  }

  render(){
    return(
      <div className='sign-forms'>
        <form>
          <Paper className='form-paper' zDepth={2}>
            <Field 
              name='username'
              component={this.renderUsername}
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
              backgroundColor='#42A5F5'
              labelColor='#FAFAFA'
            />
              <p style={{color: '#9E9E9E', fontSize: '14px', paddingBottom: '10px'}}><em>Or sign up using...</em></p>
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
            <p style={{color: '#9E9E9E', fontSize: '14px', paddingBottom: '40px'}}><em>Already have an account? Login <a href='./sign-in'>here</a></em></p>
          </Paper>
        </form>
      </div>
    )
  }

}

export default reduxForm({
  form: 'SignUpForm'
})(SignUpForm);