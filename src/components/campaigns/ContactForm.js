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
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import { deleteEntries, loadEntry } from '../../actions/contactActions';

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

const renderSelectField = ({
  input,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl>
    <InputLabel>Status</InputLabel>
    <Select
      autoWidth={true}
      {...input}
      onChange={(event, index, value) => input.onChange(value)}
      children={children}
      {...custom}
    />
  </FormControl>
)

// const renderAutoComplete = ({
//   input,
//   label
// }) => (
//   <AutoComplete 
//   floatingLabelText={label}
//   filter={AutoComplete.caseSensitiveFilter}  
//   {...input}
//   />
// );

class ContactsForm extends Component {

  handleDelete() {
    this.props.dispatch(deleteEntries())
  };

  render() {
    const submit = this.props.handleSubmit(this.props.onSubmit);
    return(
      <div>
        <div className='contacts-editing-area'>
          <Button variant='outlined' onClick={this.props.handleOpen} color='primary'>
            <Icon style={{fontSize: '1.2em', marginRight: '1em'}} className='fas fa-plus' />
            Add New Contact
          </Button>
          <Button variant='outlined' onClick={() => this.handleDelete()} color='secondary'>
            <Icon style={{fontSize: '1.2em', marginRight: '1em'}} className='far fa-trash-alt' />
            Delete Contacts
          </Button>
        </div>
        <div>
          <Dialog open={this.props.open} onClose={this.props.handleClose} aria-labelledby='form-dialog-title'>
            <DialogTitle id='form-dialog-title' style={{marginBottom: '5px'}}>
              {this.props.title}
            </DialogTitle>
            <DialogContent>
              <DialogContentText style={{marginBottom: '5px'}}>
                Add contact details below
              </DialogContentText>
              <Field 
                name='name'
                label='Name'
                component={renderTextField}
              />
              <Field 
              name='email'
              label='Email'
              component={renderTextField}
              />
              <Field 
              name='website'
              label='Website'
              component={renderTextField}
              />
              <Field 
              name='linkurl'
              label='Linking URL'
              component={renderTextField}
              />
              <Field 
              name='notes'
              label='Notes'
              component={renderTextField}
              />
              <Field
                name="status"
                component={renderSelectField}
                label="Status"
              >
                <MenuItem value={'New Contact'}>New Contact</MenuItem>
                <MenuItem value={'Needs More Research'}>Needs More Research</MenuItem>
                <MenuItem value={'Awaiting Response'}>Awaiting Response</MenuItem>
                <MenuItem value={'Response Recieved'}>Response Recieved</MenuItem>
                <MenuItem value={'Follow Up Needed'}>Follow Up Needed</MenuItem>
                <MenuItem value={'Link Approved'}>Link Approved</MenuItem>
                <MenuItem value={'Link Denied'}>Link Denied</MenuItem>
                <MenuItem value={'Link Recieved'}>Link Recieved</MenuItem>
                <MenuItem value={'Guest Post Approved'}>Guest Post Approved</MenuItem>
                <MenuItem value={'Guest Post Denied'}>Guest Post Denied</MenuItem>
              </Field>
            </DialogContent>
          <DialogActions>
            <Button onClick={() => {this.props.reset(); this.props.handleClose();}} color='secondary'>
              Cancel
            </Button>
            <Button onClick={() => {submit(); this.props.reset(); this.props.handleClose();}} color='primary'>
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
  initialValues: state.entries.entry
});

const entryForm = reduxForm({
  form: 'ContactsForm'
}, null, { deleteEntries, loadEntry, reset })(ContactsForm);

export default connect(mapStateToProps)(entryForm);