import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { newCampaign, loadCampaign } from '../../actions/campaignActions';

import './campaigns.css'

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    margin='normal'
    label={label}
    type='string'
    helperText={touched && error}
    style={{marginRight: '10px'}}
    {...input}
    {...custom}
  />
);

class CampaignForm extends Component { 6
  constructor(props) {
    super(props)

    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({
      open: true
    })
  };

  handleClose = () => {
    this.setState({
      open: false
    })
  };

  render() {
    const submit = this.props.handleSubmit(this.props.onSubmit);

    return(
      <div className='campaign-editing-area'>
        <Button variant='outlined' onClick={this.handleOpen} color='primary'>
          <Icon style={this.props.style} className={this.props.className} />
          {this.props.button}
        </Button>
          <div>
            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby='form-dialog-title'>
              <DialogTitle id='form-dialog-title' style={{marginBottom: '5px'}}>
                {this.props.title}
              </DialogTitle>
              <DialogContent>
                <DialogContentText style={{marginBottom: '5px'}}>
                  Add campaign details below
                </DialogContentText>
                <Field 
                  name='name'
                  label='Name'
                  component={renderTextField}
                />
                <Field 
                  name='url'
                  label='URL'
                  component={renderTextField}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => {this.props.reset(); this.handleClose();}} color='secondary'>
                  Cancel
                </Button>
                <Button onClick={() => {submit(); this.props.reset(); this.handleClose();}} color='primary'>
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  initialValues: state.campaigns.campaign,
  enableReinitialize: true
});

const campaignForm = reduxForm({
  form: 'CampaignForm'
}, null, { newCampaign, loadCampaign })(CampaignForm);

export default connect(mapStateToProps)(campaignForm);